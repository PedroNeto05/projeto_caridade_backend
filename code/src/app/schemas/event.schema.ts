import { z } from 'zod';

export const createEventSchema = z.object({
  userId: z.number(),
  name: z.string().min(5),
  location: z.string().min(10),
  date: z
    .string()
    .datetime()
    .transform((val) => new Date(val)),
  description: z.string().optional(),
});

export const updateEventSchema = z.object({
  userId: z.number(),
  eventId: z.number(),
  newDate: z
    .string()
    .datetime()
    .transform((val) => new Date(val)),
  newName: z.string().min(5).optional(),
  newDescription: z.string().optional(),
  newLocation: z.string().min(10).optional(),
});

export const findEventByIdSchema = z.object({
  id: z.number(),
});
