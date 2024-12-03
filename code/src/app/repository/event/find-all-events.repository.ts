import { prisma } from '@/config/prisma';
import { IFindAllEventsRepository } from '@/interfaces/event/event-repository.interface';
import { Event } from '@prisma/client';

export class FindAllEventsRepository implements IFindAllEventsRepository {
  async findAll(): Promise<Event[]> {
    const events = await prisma.event.findMany();
    return events;
  }
}
