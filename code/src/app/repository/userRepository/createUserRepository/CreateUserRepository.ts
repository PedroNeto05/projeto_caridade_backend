import { CreateUserParams } from '@/app/service/userService/createUserService/ICreateUserService';
import { ICreateUserRepository } from './ICreateUserRepository';

export class CreateUserRepository implements ICreateUserRepository {
  save(params: CreateUserParams): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
