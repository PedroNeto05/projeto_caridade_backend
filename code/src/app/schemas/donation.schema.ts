import { z } from 'zod';

export const createDonationSchema = z.object({
  userId: z.number(),
  eventId: z.number(),
  subscriberId: z.number(),
});

export const findUserDonationsSchema = z.object({
  userId: z.number(),
});

export const findEventDonationsSchema = z.object({
  eventId: z.number(),
});

export const deleteDonationSchema = z.object({
  userId: z.number(),
  eventId: z.number(),
  donationId: z.number(),
});
