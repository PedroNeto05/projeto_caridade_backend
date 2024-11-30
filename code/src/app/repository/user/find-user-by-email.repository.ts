import { prisma } from '@/config/prisma';
import { IFindUserByEmailRepository } from '@/interfaces/user/user-repository.interface';
import { User } from '@prisma/client';

export class FindUserByEmailRepository implements IFindUserByEmailRepository {
  async findByEmail(email: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }
}
