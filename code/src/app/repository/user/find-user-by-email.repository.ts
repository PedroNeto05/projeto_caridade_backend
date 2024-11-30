import { prisma } from '@/config/prisma';
import { IFindUserByEmailRepository } from '@/interfaces/user/user-repository.interface';
import { User } from '@prisma/client';

export class FindUserByEmailRepository implements IFindUserByEmailRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
