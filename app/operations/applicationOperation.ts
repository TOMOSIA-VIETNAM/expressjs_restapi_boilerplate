import { ApplicationError, UnauthorizedError } from '../errors/applicationError';
import { Request } from "express";

interface StepFunction {
  call(): any;
  stepAuthentication(): ApplicationError | boolean;
  stepAuthorization(): ApplicationError | boolean;
}

export class ApplicationOperation implements StepFunction{
  request: Request;
  error: ApplicationError;

  constructor(request: Request) {
    this.request = request;
    this.error   = null;
  }

  public call() {
    // TODO
  }

  stepAuthentication() {
    this.error = new UnauthorizedError
    return this.error;
  }

  stepAuthorization() {
    this.error = new UnauthorizedError
    return this.error;
  }
}
