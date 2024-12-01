import { z } from 'zod';

export const createEventSchema = z.object({
  userId: z.number(),
  name: z.string(),
  location: z.string(),
  date: z.string().transform((val) => new Date(val)),
  description: z.string().optional(),
});

export const updateEventSchema = z.object({
  userId: z.number(),
  eventId: z.number(),
  newDate: z
    .string()
    .transform((val) => new Date(val))
    .optional(),
  newName: z.string().optional(),
  newDescription: z.string().optional(),
  newLocation: z.string().optional(),
});
