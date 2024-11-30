import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { User } from '@prisma/client';

export interface ICreateUserRepository {
  save(params: CreateUserDTO): Promise<void>;
}

export interface IFindUserByEmailRepository {
  findByEmail(email: string): Promise<Partial<User> | null>;
}
