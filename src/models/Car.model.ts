// import { Model as M } from 'mongoose';
import ModelGeneric from './Model.generic';
// import ICarModel from './interfaces/Car.model';
import { Car } from '../interfaces/CarInterface';
import CarMongooseModel from './schemas/Car.schema';

class CarModel extends ModelGeneric<Car> {
  constructor(model = CarMongooseModel) {
    super(model);
  }
}

export default CarModel;