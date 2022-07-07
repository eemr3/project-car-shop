import { isValidObjectId, Model as M } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class ModelGeneric<T> implements Model<T> {
  constructor(protected modelMongoose: M<T>) {}

  async create(entity: T): Promise<T> {
    return this.modelMongoose.create(entity);
  }

  async read(): Promise<T[]> {
    return this.modelMongoose.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.modelMongoose.findOne({ _id: id });
  }

  async update(id: string, entity: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.modelMongoose.findByIdAndUpdate(
      id,
      entity,
      { returnOriginal: false },
    );
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.modelMongoose.findOneAndDelete({ _id: id });
  }
}

export default ModelGeneric;
