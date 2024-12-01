import { z } from 'zod';
export const createEventSchema = z.object({
  userId: z.number(),
  name: z.string(),
  location: z.string(),
  date: z.string().transform((val) => new Date(val)),
  description: z.string().optional(),
});
