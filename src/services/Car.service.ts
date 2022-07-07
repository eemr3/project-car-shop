import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/Car.model';
import ServiceGeneric from './Service.generic';
import { IServiceError } from './interfaces/error.interface';

class CarService extends ServiceGeneric<Car> {
  constructor(model = new CarModel()) {
    super(model);    
  }

  create = async (
    entity: Car,
  ): Promise<Car | IServiceError> => {
    const parsed = CarSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(entity);
  };

  readOne = async (id: string): Promise<Car | IServiceError | null> => {
    if (id.length < 24) return null;
    
    const car = await this.model.readOne(id);
    if (!car) {
      throw new Error('Object not found');
    }
    return car;
  };

  update = async (
    id: string,
    entity: Car,
  ): Promise<Car | IServiceError | null> => {
    if (id.length < 24) return null;    
    const parsed = CarSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const carEdited = await this.model.update(id, entity);
    if (!carEdited) throw new Error('Object not found');
    return carEdited;
  };
}

export default CarService;