import { CreateUserParams, ICreateUserService } from './ICreateUserService';
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export class CreateUserService implements ICreateUserService {
  constructor() {}

  execute(params: CreateUserParams): void {
    const { name, email, password } = createUserSchema.parse(params);

    console.log(name, email, password);

    throw new Error('Method not implemented.');
  }
}
