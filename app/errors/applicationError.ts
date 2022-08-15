import { codeError, statusError } from './enumError';

export interface ApplicationError {
  httpStatusCode?: statusError;
  code?: codeError;
  data?: object;
}

export class NotFoundError implements ApplicationError {
  constructor(
    public httpStatusCode: statusError = statusError.NotFound,
    public code: codeError = codeError.NotFound,
    public data: object = {},
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}

export class UnauthorizedError implements ApplicationError {
  constructor(
    public httpStatusCode: statusError = statusError.Unauthorized,
    public code: codeError = codeError.Unauthorized,
    public data: object = {},
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}

export class InternalServerError implements ApplicationError {
  constructor(
    public httpStatusCode: statusError = statusError.InternalServerError,
    public code: codeError = codeError.InternalServerError,
    public data: object = {},
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}

export class BadRequestError implements ApplicationError {
  constructor(
    public httpStatusCode: statusError = statusError.BadRequest,
    public code: codeError = codeError.BadRequest,
    public data: object = {},
  ) {
    this.httpStatusCode = httpStatusCode;
    this.code           = code;
    this.data           = data;
  }
}
