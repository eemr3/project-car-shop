import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const VALUES = ['Street', 'Custom', 'Trail'] as const;
export const MotorcycleSchema = z.object({
  category: z.enum(VALUES),
  engineCapacity: z.number().gte(1).lte(2500),
});

export type Motorcycle = z.infer<typeof MotorcycleSchema> & Vehicle;
