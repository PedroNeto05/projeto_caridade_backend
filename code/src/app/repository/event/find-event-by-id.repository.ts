import { prisma } from '@/config/prisma';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { Event } from '@prisma/client';

export class FindEventByIdRepository implements IFindEventByIdRepository {
  async findById(eventId: number): Promise<Event | null> {
    const event = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });

    return event;
  }
}
