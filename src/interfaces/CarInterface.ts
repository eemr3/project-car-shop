import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number().lte(2).gte(4),
  seatsQty: z.number().lte(2).gte(7),
});

export type Car = z.infer<typeof CarSchema> & Vehicle;
