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

  constructor(protected service: ServiceGeneric<T>) {}

  abstract create(
    req: IRequestWithBody<T>,
    res: Response<T | ResponseError>): Promise<typeof res>;

  read = async (
    _req: IRequestWithBody<T>,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const cars = await this.service.read();
        
      return res.status(200).json(cars);
    } catch (error: unknown) {
      return res.status(500).json(error as undefined);
    }
  };

  abstract readOne(req: Request<{ id: string }>,
    res: Response<T | ResponseError>):
  Promise<typeof res>;

  abstract update(req: IRequestWithBody<T>,
    res: Response<T | ResponseError>): Promise<typeof res>;

  abstract delete(req: Request<{ id: string }>,
    res: Response<T | ResponseError>): Promise<typeof res>;
}

export default ControllerGeneric;
