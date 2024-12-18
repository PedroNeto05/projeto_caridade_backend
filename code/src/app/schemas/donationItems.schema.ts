import { z } from 'zod';

export const createDonationItemsSchema = z.object({
  userId: z.number(),
  donationId: z.number(),
  type: z.string().min(5),
  description: z.string().min(10).optional(),
  quantity: z.number().min(1),
});

export const updateDonationItemsSchema = z.object({
  userId: z.number(),
  donationItemId: z.number(),
  newType: z.string().min(5).optional(),
  newDescription: z.string().min(10).optional(),
  newQuantity: z.number().min(1).optional(),
});

export const deleteDonationItemsSchema = z.object({
  userId: z.number(),
  donationItemId: z.number(),
});

export const findDonationItemByIdSchema = z.object({
  id: z.number(),
});
