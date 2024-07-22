import { request } from 'playwright';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' ;

interface ApiRequestOptions {
  method: HttpMethod;
  endPoint: string;
  payload?: any;
  headers?: Record<string, string>;
}
interface ApiResponse {
  status: number;
  headers: Record<string, string>;
  body: any; 
}
export async function apiRequest({ method, endPoint, payload = {}, headers = {} }: ApiRequestOptions): Promise<ApiResponse> {
  const context = await request.newContext();
  let response;

  switch (method.toUpperCase()) {
    case 'GET':
      response = await context.get(endPoint, { headers });
      break;
    case 'POST':
      response = await context.post(endPoint, { data: payload, headers });
      break;
    case 'PUT':
      response = await context.put(endPoint, { data: payload, headers });
      break;
    case 'DELETE':
      response = await context.delete(endPoint, { data: payload, headers });
      break;
    case 'PATCH':
      response = await context.patch(endPoint, { data: payload, headers });
      break;
   
    default:
      throw new Error(`Unsupported method: ${method}`);
  }

  const contentType = response.headers()['content-type'];

  let responseBody: any;
  if (contentType && contentType.includes('application/json')) {
    responseBody = await response.json().catch(() => null);
  } else if (contentType && (contentType.includes('text/xml') || contentType.includes('application/xml'))) {
    responseBody = await response.text().catch(() => null);
  } else {
    responseBody = await response.text().catch(() => null);
  }

  return {
    status: response.status(),
    headers: response.headers(),
    body: responseBody,
  };
}
