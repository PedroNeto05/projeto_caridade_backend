import { prisma } from '@/config/prisma';
import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { ICreateUserRepository } from '@/interfaces/user/user-repository.interface';

export class CreateUserRepository implements ICreateUserRepository {
  async save({ name, email, password }: CreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}
