import type { Response } from 'express';

import {
  Catch,
  Logger,
  ContextType,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  InternalServerErrorException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): unknown | void {
    this.logger.verbose(
      `Handling exception with host type [${host.getType()}]`
    );

    switch (host.getType() as ContextType) {
      case 'http': {
        this.catchHttp(exception, host);
        return;
      }
      default: {
        this.logger.warn(
          `Unable to deal with host type [${host.getType()}] exception:`,
          exception
        );
        throw new InternalServerErrorException();
      }
    }
  }

  // MARK: Private

  private catchHttp(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();

    // This is for the expected errors
    if (exception instanceof HttpException) {
      response.status(exception.getStatus());
      response.send(exception.getResponse());

      return;
    }

    // Here do something for unexpected ones
    this.logger.error('Potentially uncaught error reached the api:');
    console.error(exception);

    const error = new InternalServerErrorException();

    response.status(error.getStatus());
    response.send(error.getResponse());
  }
}
