import { Request, Response } from 'express';
import ServiceGeneric from '../services/Service.generic';
// import { Model } from '../interfaces/ModelInterface';

import { IRequestWithBody } from './interfaces/Controller.interface';

export type ResponseError = {
  error: unknown
};

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
  isValidId = 'Id must have 24 hexadecimal characters',
}

abstract class ControllerGeneric<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: ServiceGeneric<T | ResponseError>) {}

  abstract create(
    req: IRequestWithBody<T>, res: Response): Promise<typeof res>;

  abstract read(
    req: IRequestWithBody<T>,
    res: Response<T[]>): Promise<typeof res>;

  abstract readOne(req: Request<{ id: string }>,
    res: Response<T | ResponseError>):
  Promise<typeof res>;

  abstract update(req: IRequestWithBody<T | ResponseError>,
    res: Response): Promise<typeof res>;

  abstract delete(req: IRequestWithBody<T | ResponseError>,
    res: Response): Promise<typeof res>;
}

export default ControllerGeneric;
