import { Request, Response } from 'express';
import ControllerGeneric, { ResponseError } from './Controller.generic';
import { IRequestWithBody } from './interfaces/Controller.interface';
import CarService from '../services/Car.service';
import { Car } from '../interfaces/CarInterface';

class CarController extends ControllerGeneric<Car> {
  private _route: string;

  constructor(service = new CarService(), route = '/cars') {
    super(service);    
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (
    req: IRequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    try {            
      const { body } = req;
      const car = await this.service.create(body);
      if (!car) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in car) return res.status(400).json();
      
      return res.status(201).json(car);
    } catch (error) {
      return res.status(400).json({ error: this.errors.internal });
    }
  };  

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.readOne(id);
      return car ? res.status(200).json(car)
        : res.status(400).json({ error: this.errors.isValidId });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  update = async (
    req: IRequestWithBody<Car>,
    res: Response<Car | ResponseError | null>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    const { model, year, color, status, buyValue, doorsQty,
      seatsQty } = req.body;
    try {
      const car = await this.service.update(id, {
        model, year, color, status, buyValue, doorsQty, seatsQty });
      if (!car) {
        return res.status(400).json({ error: this.errors.isValidId });
      }
      if ('error' in car) return res.status(400).json(car);
      return res.status(200).json(car);
    } catch (error) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const car = await this.service.delete(id);
      if (!car) {
        return res.status(400).json({ error: this.errors.isValidId });
      }
      if ('error' in car) return res.status(400).json(car);
      return res.status(204).json(car);
    } catch (error) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };
}

export default CarController;