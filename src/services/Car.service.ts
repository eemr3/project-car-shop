import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/Car.model';
import ServiceGeneric from './Service.generic';
import { IServiceError } from './interfaces/error.interface';

class CarService extends ServiceGeneric<Car> {
  constructor(model = new CarModel()) {
    super(model);    
  }

  create = async (
    obj: Car,
  ): Promise<Car | IServiceError> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default CarService;