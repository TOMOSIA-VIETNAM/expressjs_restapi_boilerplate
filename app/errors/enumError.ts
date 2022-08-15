export enum codeError {
  NotFound            = 'not_found',
  Unauthorized        = 'unauthorized',
  InternalServerError = 'internal_server_error',
  BadRequest          = 'bad_request',
}

export enum statusError {
  NotFound            = 404,
  Unauthorized        = 401,
  InternalServerError = 500,
  BadRequest          = 400,
}
