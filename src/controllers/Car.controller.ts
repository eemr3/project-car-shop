import { Response } from 'express';
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
      const { model, year, color, status, buyValue,
        doorsQty,
        seatsQty } = req.body;
      const car = await this.service.create(
        { model, year, color, status, buyValue, doorsQty, seatsQty },
      );
      if (!car) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in car) return res.status(400).json();
      
      return res.status(201).json(car);
    } catch (error) {
      return res.status(400).json({ error: this.errors.internal });
    }
  };  

  read = async (
    req: IRequestWithBody<Car>,
    res: Response,
  ): Promise<typeof res> => {
    try {
      const cars = await this.service.read();
      
      return res.status(200).json(cars);
    } catch (error: unknown) {
      return res.status(500).json(error as undefined);
    }
  };

  async readOne(req: IRequestWithBody<Car>, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const car = await this.service.readOne(id);
      return res.status(200).json(car);
    } catch (error) {
      return res.send(error);
    }
  }

  async update(req: IRequestWithBody<Car>, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { model, year,
        color,
        status,
        buyValue,
        doorsQty,
        seatsQty } = req.body;
      const car = await this.service.update(
        id,
        { model, year, color, status, buyValue, doorsQty, seatsQty },
      );
      return res.status(200).json(car);
    } catch (error) {
      return res.send(error);
    }
  }

  async delete(req: IRequestWithBody<Car>, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const car = await this.service.delete(id);
      return res.status(200).json(car);
    } catch (error) {
      return res.send(error);
    }
  }
}

export default CarController;