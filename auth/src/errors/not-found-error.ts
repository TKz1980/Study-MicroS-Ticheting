import { CustomError } from "./custom-error";

export class NotFoundErrror extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route not found");
    Object.setPrototypeOf(this, NotFoundErrror.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}
