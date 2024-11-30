import httpError from 'http-errors';
import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@/interfaces/user/user-repository.interface';
import { ICreateUserService } from '@/interfaces/user/user-service.interfaces';
import { createUserSchema } from '@/schemas/user.schema';

export class CreateUserService implements ICreateUserService {
  constructor(
    private createUserRepository: ICreateUserRepository,
    private findUserByEmailRepository: IFindUserByEmailRepository
  ) {}

  async execute(params: CreateUserDTO): Promise<void> {
    const { name, email, password } = createUserSchema.parse(params);

    const user = await this.findUserByEmailRepository.findByEmail(email);

    if (user) {
      httpError.Conflict('user already exist');
    }

    await this.createUserRepository.save({ name, email, password });

    throw new Error('Method not implemented.');
  }
}
