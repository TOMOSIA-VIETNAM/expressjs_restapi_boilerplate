import { response, Response } from 'express';
import { ApplicationError } from "../app/errors/applicationError"


declare global {
  namespace Express {
    export interface Response {
      success(data?: any): Response;
      error(error: ApplicationError): Response;
    }
  }
}

response.success = function (data: any = null): Response {
  return this.status(200).json({ status: 200, code: 'success', data: data });
};

response.error = function (error: ApplicationError): Response {
  return this.status(error.httpStatusCode).json({ status: error.httpStatusCode, code: error.code, data: error.data });
};
