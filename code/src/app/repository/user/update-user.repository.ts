import { prisma } from '@/config/prisma';
import { UpdateUserDTO } from '@/dtos/user/update-user.dto';
import { IUpdateUserRepository } from '@/interfaces/user/user-repository.interface';

export class UpdateUserRepository implements IUpdateUserRepository {
  async update(params: UpdateUserDTO): Promise<void> {
    await prisma.user.update({
      where: {
        email: params.currentEmail,
      },
      data: {
        name: params.newName,
        email: params.newEmail,
        password: params.newPassword,
      },
    });
  }
}
