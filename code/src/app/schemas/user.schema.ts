import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export const updateUserSchema = z
  .object({
    newName: z.string().min(3).optional(),
    currentEmail: z.string().email(),
    newEmail: z.string().email().optional(),
    currentPassword: z.string().min(6),
    newPassword: z.string().min(6).optional(),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: 'New password cannot be the same as current password',
    path: ['newPassword'],
  })
  .refine((data) => data.currentEmail !== data.newEmail, {
    message: 'New email cannot be the same as current email',
    path: ['newEmail'],
  });

export const findUserByIdSchema = z.object({
  id: z.string().transform((val) => {
    const parsed = parseInt(val);

    if (isNaN(parsed)) throw new Error('id must be a valid number');

    return parsed;
  }),
});
