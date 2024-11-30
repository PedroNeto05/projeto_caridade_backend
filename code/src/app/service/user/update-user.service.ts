import { UpdateUserDTO } from '@/dtos/user/update-user.dto';
import {
  IFindUserByEmailRepository,
  IUpdateUserRepository,
} from '@/interfaces/user/user-repository.interface';
import { IUpdateUserService } from '@/interfaces/user/user-service.interfaces';
import { updateUserSchema } from '@/schemas/user.schema';
import { hash } from 'bcryptjs';
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

    if (user?.password !== currentPassword) {
      throw new httpError.Unauthorized('wrong password');
    }

    const hashPassword = newPassword ? await hash(newPassword, 10) : undefined;

    this.updateUserRepository.update({
      newPassword: hashPassword,
      newEmail,
      newName,
      currentPassword,
      currentEmail,
    });
  }
}
