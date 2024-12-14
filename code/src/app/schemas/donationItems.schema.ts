import { z } from 'zod';

export const createDonationItemsSchema = z.object({
  userId: z.number(),
  donationId: z.number(),
  type: z.string().min(5),
  description: z.string().min(10).optional(),
  quantity: z.number().min(1),
});

export const deleteDonationItemsSchema = z.object({
  userId: z.number(),
  donationId: z.number(),
});