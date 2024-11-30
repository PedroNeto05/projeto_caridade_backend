import httpError from 'http-errors';
import { IFindUserByIdRepository } from '@/interfaces/user/user-repository.interface';
import { IFindUserByIdService } from '@/interfaces/user/user-service.interfaces';
import { findUserByIdSchema } from '@/schemas/user.schema';
import { User } from '@prisma/client';
import { FindUserByIdDTO } from '@/dtos/user/find-user-by-id.dto';

export class FindUserByIdService implements IFindUserByIdService {
  constructor(private findUserByIdRepository: IFindUserByIdRepository) {}
  async execute(params: FindUserByIdDTO): Promise<User> {
    const { id } = findUserByIdSchema.parse(params);

    const user = await this.findUserByIdRepository.findById(id);

    // TODO - retirar a senha do usuario, o created_at e updated_at

    if (!user) {
      throw new httpError.NotFound('user not found');
    }

    return user;
  }
}
