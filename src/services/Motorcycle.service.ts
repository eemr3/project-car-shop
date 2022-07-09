import ServiceGeneric from './Service.generic';
import { IServiceError } from './interfaces/error.interface';
import {
  Motorcycle,
  MotorcycleSchema,
} from '../interfaces/MotorcycleInterface';
import MotorcycleModel from '../models/Motorcycle.model';

class MotorcycleService extends ServiceGeneric<Motorcycle> {
  private _errorMessage = 'Object not found';

  constructor(model = new MotorcycleModel()) {
    super(model);    
  }

  create = async (
    entity: Motorcycle,
  ): Promise<Motorcycle | IServiceError | null> => {
    const parsed = MotorcycleSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(entity);
  };

  readOne = async (id: string): Promise<Motorcycle | null> => {
    if (id.length < 24) return null;
    
    const car = await this.model.readOne(id);
    if (!car) {
      throw new Error(this._errorMessage);
    }
    return car;
  };

  update = async (
    id: string,
    entity: Motorcycle,
  ): Promise<Motorcycle | IServiceError | null> => {
    if (id.length < 24) return null;    
    const parsed = MotorcycleSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const carEdited = await this.model.update(id, entity);
    if (!carEdited) throw new Error(this._errorMessage);
    return carEdited;
  };

  delete = async (id: string): Promise<Motorcycle | null> => {
    if (id.length < 24) return null; 
    const carDeleted = await this.model.delete(id);
    if (!carDeleted) throw new Error(this._errorMessage);

    return carDeleted;
  }; 
}

export default MotorcycleService;