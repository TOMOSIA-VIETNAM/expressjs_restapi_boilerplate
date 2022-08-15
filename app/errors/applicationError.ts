import { codeError, statusError } from './enumError';

export interface ApplicationError {
  httpStatusCode?: statusError;
  code?: codeError;
  data?: object;
}

export class NotFoundError implements ApplicationError {
  constructor(
    public data: object = {},
    public httpStatusCode: statusError = statusError.NotFound,
    public code: codeError = codeError.NotFound,
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}

export class UnauthorizedError implements ApplicationError {
  constructor(
    public data: object = {},
    public httpStatusCode: statusError = statusError.Unauthorized,
    public code: codeError = codeError.Unauthorized,
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}

export class InternalServerError implements ApplicationError {
  constructor(
    public data: object = {},
    public httpStatusCode: statusError = statusError.InternalServerError,
    public code: codeError = codeError.InternalServerError,
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}

export class BadRequestError implements ApplicationError {
  constructor(
    public data: object[],
    public httpStatusCode: statusError = statusError.BadRequest,
    public code: codeError = codeError.BadRequest
  ) {
    this.data           = data;
    this.httpStatusCode = statusError.BadRequest;
    this.code           = codeError.BadRequest;
  }
}
