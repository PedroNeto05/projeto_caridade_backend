import { UpdateUserDTO } from '@/dtos/user/update-user.dto';
import {
  IFindUserByEmailRepository,
  IUpdateUserRepository,
} from '@/interfaces/user/user-repository.interface';
import { IUpdateUserService } from '@/interfaces/user/user-service.interfaces';
import { updateUserSchema } from '@/schemas/user.schema';
import { hash, compare } from 'bcryptjs';
import httpError from 'http-errors';

export class UpdateUserService implements IUpdateUserService {
  constructor(
    private findUserByEmailRepository: IFindUserByEmailRepository,
    private updateUserRepository: IUpdateUserRepository
  ) {}

  async execute(params: UpdateUserDTO): Promise<void> {
    const { newName, newEmail, currentEmail, newPassword, currentPassword } =
      updateUserSchema.parse(params);

    const user = await this.findUserByEmailRepository.findByEmail(currentEmail);

    if (!user) {
      throw new httpError.NotFound('User not found');
    }

    const passwordRight = await compare(currentPassword, user.password);

    if (!passwordRight) {
      throw new httpError.Unauthorized('Wrong password');
    }

    const hashPassword = newPassword ? await hash(newPassword, 10) : undefined;

    await this.updateUserRepository.update({
      currentPassword,
      newPassword: hashPassword,
      newEmail,
      newName,
      currentEmail,
    });
  }
}
