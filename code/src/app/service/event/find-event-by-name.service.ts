import { FindEventByNameDTO } from '@/dtos/event/find-event-by-name.dto';
import { IFindEventByNameRepository } from '@/interfaces/event/event-repository.interface';
import { IFindEventByNameSerivce } from '@/interfaces/event/event-service.interface';
import { findEventByNameSchema } from '@/schemas/event.schema';
import { Event } from '@prisma/client';

export class FindEventByNameService implements IFindEventByNameSerivce {
  constructor(private findEventByNameRepository: IFindEventByNameRepository) {}
  async execute(params: FindEventByNameDTO): Promise<Event[]> {
    const { name } = findEventByNameSchema.parse(params);

    const events = await this.findEventByNameRepository.findByName({ name });

    return events;
  }
}
