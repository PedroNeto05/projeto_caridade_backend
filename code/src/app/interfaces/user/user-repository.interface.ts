import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { User } from '@/entity/User';

export interface ICreateUserRepository {
  save(params: CreateUserDTO): Promise<void>;
}

export interface IFindUserByEmailRepository {
  findByEmail(email: string): Promise<Omit<User, 'password'> | null>;
}
