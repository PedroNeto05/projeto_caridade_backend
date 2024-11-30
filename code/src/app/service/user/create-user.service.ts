import httpError from 'http-errors';
import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@/interfaces/user/user-repository.interface';
import { ICreateUserService } from '@/interfaces/user/user-service.interfaces';
import { createUserSchema } from '@/schemas/user.schema';
import { hash } from 'bcryptjs';

export class CreateUserService implements ICreateUserService {
  constructor(
    private createUserRepository: ICreateUserRepository,
    private findUserByEmailRepository: IFindUserByEmailRepository
  ) {}

  async execute(params: CreateUserDTO): Promise<void> {
    const { name, email, password } = createUserSchema.parse(params);

    const user = await this.findUserByEmailRepository.findByEmail(email);

    if (user) {
      throw new httpError.Conflict('user already exist');
    }

    const passwordHash = await hash(password, 10);

    await this.createUserRepository.save({
      name,
      email,
      password: passwordHash,
    });
  }
}
