import httpError from 'http-errors';
import { DeleteEventDTO } from '@/dtos/event/delete-event.dto';
import {
  IDeleteEventRepository,
  IFindEventByIdRepository,
} from '@/interfaces/event/event-repository.interface';
import { IDeleteEventService } from '@/interfaces/event/event-service.interface';
import { deleteEventSchema } from '@/schemas/event.schema';
import { compare } from 'bcryptjs';
import { IFindUserByIdRepository } from '@/interfaces/user/user-repository.interface';

export class DeleteEventService implements IDeleteEventService {
  constructor(
    private findEventByIdRepository: IFindEventByIdRepository,
    private findUserByIdRepository: IFindUserByIdRepository,
    private deleteEventRepository: IDeleteEventRepository
  ) {}
  async execute(params: DeleteEventDTO): Promise<void> {
    const { userId, eventId, password } = deleteEventSchema.parse(params);

    const event = await this.findEventByIdRepository.findById(eventId);

    if (!event) {
      throw new httpError.NotFound('event not found');
    }

    if (userId !== event.createdById) {
      throw new httpError.Forbidden(
        'you do not have permission to access this resource.'
      );
    }

    const user = await this.findUserByIdRepository.findById(userId);

    if (!user) {
      throw new httpError.NotFound('User not found');
    }

    const passwordRight = compare(params.password, user.password);

    if (!passwordRight) {
      throw new httpError.Unauthorized('Wrong password');
    }

    await this.deleteEventRepository.delete({ userId, eventId, password });
  }
}
