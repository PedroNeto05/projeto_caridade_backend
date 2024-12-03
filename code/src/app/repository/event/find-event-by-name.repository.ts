import { prisma } from '@/config/prisma';
import { FindEventByNameDTO } from '@/dtos/event/find-event-by-name.dto';
import { IFindEventByNameRepository } from '@/interfaces/event/event-repository.interface';
import { Event } from '@prisma/client';

export class FindEventByNameRepository implements IFindEventByNameRepository {
  async findByName(params: FindEventByNameDTO): Promise<Event[]> {
    const events = await prisma.event.findMany({
      where: {
        name: params.name,
      },
    });

    return events;
  }
}
