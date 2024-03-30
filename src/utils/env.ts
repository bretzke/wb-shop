import { z } from "zod";

const envSchema = z.object({
  STRIPE_SECRET_KEY: z.string(),
});

export const env = envSchema.parse({
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
});
