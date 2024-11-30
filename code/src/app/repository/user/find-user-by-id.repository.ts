import { prisma } from '@/config/prisma';
import { IFindUserByIdRepository } from '@/interfaces/user/user-repository.interface';
import { User } from '@prisma/client';

export class FindUserByIdRepository implements IFindUserByIdRepository {
  async findById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
