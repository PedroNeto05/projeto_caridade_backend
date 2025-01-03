import { prisma } from '@/config/prisma';
import { IFindEventByNameAndDateRepository } from '@/interfaces/event/event-repository.interface';
import { Event } from '@prisma/client';

export class FindEventByNameAndDateRepository
  implements IFindEventByNameAndDateRepository
{
  async findByNameAndDate(name: string, date: Date): Promise<Event | null> {
    const event = await prisma.event.findFirst({
      where: {
        name,
        date,
      },
    });

    return event;
  }
}
