import httpError from 'http-errors';
import { DeleteUserDTO } from '@/dtos/user/delete-user.dto';
import {
  IDeleteUserRepository,
  IFindUserByEmailRepository,
} from '@/interfaces/user/user-repository.interface';
import { IDeleteUserService } from '@/interfaces/user/user-service.interfaces';
import { deleteUserSchema } from '@/schemas/user.schema';
import { compare } from 'bcryptjs';

export class DeleteUserService implements IDeleteUserService {
  constructor(
    private deleteUserRepository: IDeleteUserRepository,
    private findUserByEmailRepository: IFindUserByEmailRepository
  ) {}

  async execute(params: DeleteUserDTO): Promise<void> {
    const { email, password } = deleteUserSchema.parse(params);

    const user = await this.findUserByEmailRepository.findByEmail(email);

    if (!user) {
      throw new httpError.NotFound('User not found');
    }

    const passwordRight = await compare(password, user.password);

    if (!passwordRight) {
      throw new httpError.Unauthorized('Wrong password');
    }

    await this.deleteUserRepository.delete(params);
  }
}
