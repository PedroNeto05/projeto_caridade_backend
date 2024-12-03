import httpError from 'http-errors';
import { IFindEventByIdService } from '@/interfaces/event/event-service.interface';
import { FindEventByIdDTO } from '@/dtos/event/find-event-by-id.dto';
import { Event } from '@prisma/client';
import { findEventByIdSchema } from '@/schemas/event.schema';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';

export class FindEventByIdService implements IFindEventByIdService {
  constructor(private findEventByIdRepository: IFindEventByIdRepository) {}
  async execute(params: FindEventByIdDTO): Promise<Event | null> {
    const { id } = findEventByIdSchema.parse(params);

    const event = await this.findEventByIdRepository.findById(id);

    if (!event) {
      throw new httpError.NotFound('event not found');
    }

    return event;
  }
}
