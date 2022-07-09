import { Schema, model } from 'mongoose';
import { Motorcycle } from '../../interfaces/MotorcycleInterface';

const MotorcycleSchema = new Schema<Motorcycle>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
 
}, { versionKey: false });

const MotorcycleMongooseModel = model<Motorcycle>(
  'Motorcycle',
  MotorcycleSchema,
);

export default MotorcycleMongooseModel;