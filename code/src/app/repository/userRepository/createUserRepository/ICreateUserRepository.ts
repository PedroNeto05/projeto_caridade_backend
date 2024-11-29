import { CreateUserParams } from '@/app/service/userService/createUserService/ICreateUserService';

export interface ICreateUserRepository {
  save(params: CreateUserParams): Promise<void>;
}
