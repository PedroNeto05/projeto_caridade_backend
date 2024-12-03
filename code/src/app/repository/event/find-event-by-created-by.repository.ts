import { prisma } from '@/config/prisma';
import { FindEventByCreatedByDTO } from '@/dtos/event/find-event-by-created-by.dto';
import { IFindEventByCreatedByRepository } from '@/interfaces/event/event-repository.interface';
import { Event } from '@prisma/client';

export class FindEventByCreatedByRepository
  implements IFindEventByCreatedByRepository
{
  async findByCreatedBy(params: FindEventByCreatedByDTO): Promise<Event[]> {
    const events = await prisma.event.findMany({
      where: {
        createdById: params.createdBy,
      },
    });

    return events;
  }
}
