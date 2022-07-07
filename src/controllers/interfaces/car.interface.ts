import { Request, Response } from 'express';

export interface ICarController {
  create(req: Request, res: Response): Promise<Response>;
  read(req: Request, res: Response): Promise<Response>
  readOn(req: Request, res: Response): Promise<Response | null>
  updadete(req: Request, res: Response): Promise<Response | null>
  delete(req: Request, res: Response): Promise<Response | null>;
}