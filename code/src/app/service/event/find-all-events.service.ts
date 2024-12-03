import { Event } from '@prisma/client';
import { IFindAllEventsService } from '@/interfaces/event/event-service.interface';
import { IFindAllEventsRepository } from '@/interfaces/event/event-repository.interface';

export class FindAllEventsService implements IFindAllEventsService {
  constructor(private findAllEventsRepository: IFindAllEventsRepository) {}
  async execute(): Promise<Event[]> {
    const events = await this.findAllEventsRepository.findAll();

    return events;
  }
}
