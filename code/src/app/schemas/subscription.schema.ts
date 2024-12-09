import z from 'zod';

export { z } from 'zod';

export const createSubscriptionSchema = z.object({
  userId: z.number(),
  eventId: z.number(),
});
