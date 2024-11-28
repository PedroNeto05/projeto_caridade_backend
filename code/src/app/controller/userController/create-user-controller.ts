import { ICreateUserService } from '@/app/interfaces/user/controller';
import type { Request, Response } from 'express';
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export class CreateUserController {
  constructor(private readonly createUserService: ICreateUserService) {}

  handle(req: Request, res: Response) {
    try {
      const { name, email, password } = createUserSchema.parse(req.body);

      this.createUserService.
    } catch (error) {}
  }
}
