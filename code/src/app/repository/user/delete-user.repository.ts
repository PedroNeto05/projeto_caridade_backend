import { prisma } from '@/config/prisma';
import { DeleteUserDTO } from '@/dtos/user/delete-user.dto';
import { IDeleteUserRepository } from '@/interfaces/user/user-repository.interface';

export class DeleteUserRepository implements IDeleteUserRepository {
  async delete(params: DeleteUserDTO): Promise<void> {
    await prisma.user.delete({
      where: {
        email: params.email,
      },
    });
  }
}
