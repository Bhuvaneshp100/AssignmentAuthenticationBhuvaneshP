import { Given, When, Then, AfterAll } from '@cucumber/cucumber';
import {anyService} from '../../Common/apibase/apibase'



const test =anyService

let baseUrl: string;
let manipulatedEndPoint: string;

Given('Hit API endpoint is {string}', (endpoint: string) => {
  baseUrl = endpoint;
  console.log(`Base URL: ${baseUrl}`);
});

Then('Add resource with endpoint {string}', (resource: string) => {
  manipulatedEndPoint = `${baseUrl}${resource}`;
  console.log(`Manipulated Endpoint: ${manipulatedEndPoint}`);
});

Then('Hit the Method with manupilated endpoint {string}', async (httpsMethod: string) => {
  await test.apiRequest(manipulatedEndPoint, httpsMethod);
});
Then ('validate the {string} and schema {string}', async (statusCode: string,schemaPath: string) => {
  await test.getapivalidation(parseInt(statusCode),schemaPath);
})

Then ('validate the responsecode{string}', async (statusCode: string) => {
  await test.apivalidation(parseInt(statusCode));
})
Then ('validate the {string} and responsemessage {string}', async (statusCode: string,Responsemessage: string) => {
  await test.validationresponsemesage(parseInt(statusCode),Responsemessage);
})


