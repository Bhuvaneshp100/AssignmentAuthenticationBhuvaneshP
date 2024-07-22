import { apiRequest } from "./common";
import { setDefaultTimeout } from "@cucumber/cucumber";
import * as fs from "fs";
import * as glob from "glob";
import { expect,request } from "@playwright/test";

// setDefaultTimeout(30000);
let resGlobal: { status: number; body: any }; 

const anyService = {
  
  async apiRequest(endpoint: string, httpsMethod: string): Promise<void> {
    const method = httpsMethod.toUpperCase() as 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    const response = await apiRequest({ method, endPoint: endpoint });
    resGlobal = response; 
    console.log('Response:', response);
  },
  async testApiEndpoint(baseUrl: string, params: { [key: string]: string }, expectedProperties: string[]) {
    const context = await request.newContext();
    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
    const response = await context.get(url);
    const responseBody = await response.json();0
    if (response.status() === 200) {
        expect(response.statusText()).toBe('OK');
        expectedProperties.forEach(property => {
            expect(responseBody).toHaveProperty(property);
        });
        console.log('URL:', url);
        console.log('API response structure is valid.', JSON.stringify(responseBody, null, 2));
    } else {
        console.log('API response structure is invalid.');
    }
},
  async getapivalidation(responseCode: number, schemaPath: string) {
    const filePath = "resource/" + schemaPath;
    const compareJsonSchemaPath = glob.sync(filePath)[0];
    const actualJsonSchemaPath = "resource/actualResponse.json";
    const sampleResponse = await this.readJSONfile(glob.sync(filePath)[0]);
    expect(resGlobal.status).toEqual(responseCode);

    if (resGlobal.status === 200) {
        await this.validateActualVsExpectedResponse(sampleResponse, resGlobal.body);
        await this.writeJSONFile(actualJsonSchemaPath,resGlobal.body);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const finalSchemaComparisonResult = await this.compareJsonSchema(compareJsonSchemaPath, actualJsonSchemaPath);
        expect(finalSchemaComparisonResult.areEqual).toBeTruthy();
        console.log("Json and Schema validate sucessfully fot get call")
       
    }
    else if (resGlobal.status === 201) {
      await this.validateActualVsExpectedResponse(sampleResponse, resGlobal.body);
      await this.writeJSONFile(actualJsonSchemaPath,resGlobal.body);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const finalSchemaComparisonResult = await this.compareJsonSchema(compareJsonSchemaPath, actualJsonSchemaPath);
      expect(finalSchemaComparisonResult.areEqual).toBeTruthy();
      console.log("Json and Schema validate sucessfully fot post call")
  } else {
      console.warn('Unexpected structure in 200 response:', resGlobal.body);
      expect(true).toBeFalsy();
    }
  },
  async validationresponsemesage(responseCode: number, Responsemessage: string) {  
    if (resGlobal.status === 201) {
      const expectedValue = Number(Responsemessage);
       expect(resGlobal.body.id).toBe(expectedValue) 
       console.log("Validate response message")
    }
    else {
      console.warn('Unexpected structure in response:', resGlobal.body);
      expect(true).toBeFalsy();
    }},

  async apivalidation(responseCode: number) {
    if (resGlobal.status === 200) {
      expect(resGlobal.status).toEqual(responseCode);
      console.log(resGlobal.status)
    }
    else if (resGlobal.status === 201) {
      expect(resGlobal.status).toEqual(responseCode);
    }
    else if (resGlobal.status === 404) {
      expect(resGlobal.status).toEqual(responseCode);
    }else {
      console.warn('Unexpected structure in 200 response:', resGlobal.body);
      expect(true).toBeFalsy();
    }
  },

  async readJSONfile(filePath: string): Promise<any> {
    try {
      const stats = fs.statSync(filePath);
      if (!stats.isFile()) {
        throw new Error(`Invalid file path: ${filePath} is not a file.`);
      }
  
      const data = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (err) {
      throw new Error('Error reading or parsing JSON file: ' + (err as Error).message);
    }
  },

  async writeJSONFile(filePath: string, jsonContent: any) {
    fs.promises.writeFile(filePath, JSON.stringify(jsonContent, null, 2), 'utf-8');
  },

  async compareJsonSchema(filePath1: string, filePath2: string): Promise<{ areEqual: boolean }> {
    const schema1 = await this.readJSONfile(filePath1);
    const schema2 = await this.readJSONfile(filePath2);
    const areEqual = this.compareObjects(schema1, schema2);

    return { areEqual };
  },

  async validateActualVsExpectedResponse(actual: any, expected: any) {
    expect(actual).toEqual(expected);
  },
  compareObjects(obj1: any, obj2: any): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      const val1 = obj1[key];
      const val2 = obj2[key];

      const areObjects = this.isObject(val1) && this.isObject(val2);
      if (areObjects && !this.compareObjects(val1, val2)) {
        return false;
      } else if (!areObjects && val1 !== val2) {
        return false;
      }
    }

    return true;
  },
  isObject(val: any): boolean {
    return typeof val === 'object' && val !== null;
  }
};
export { anyService };
