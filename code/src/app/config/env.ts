import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  SECRET_KEY: z.string().min(1),
  PORT: z
    .string()
    .min(4)
    .transform((val) => {
      const parsed = parseInt(val);

      if (isNaN(parsed)) throw new Error('PORT must be a valid number');

      return parsed;
    }),
});

export const env = envSchema.parse(process.env);
