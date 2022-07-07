import { Car } from '../../interfaces/CarInterface';
import { Model } from '../../interfaces/ModelInterface';

export type ICar = Model<Car>;

export interface ICarService {
  create(entity: Car): Promise<Car>;
  read(): Promise<Car[]>;
  readOne(id: string): Promise<Car | null>;
  update(id: string, entity: Car): Promise<Car | null>;
  delete(id: string): Promise<Car | null>;
}