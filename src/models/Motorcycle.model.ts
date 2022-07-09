import ModelGeneric from './Model.generic';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MotorcycleMongooseModel from './schemas/Motorcycle.schema copy';

class MotorcycleModel extends ModelGeneric<Motorcycle> {
  constructor(model = MotorcycleMongooseModel) {
    super(model);
  }
}

export default MotorcycleModel;