import { prisma } from '@/config/prisma';
import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { ICreateEventRepository } from '@/interfaces/event/event-repository.interface';

export class CreateEventRepository implements ICreateEventRepository {
  async save(params: CreateEventDTO): Promise<void> {
    await prisma.event.create({
      data: {
        name: params.name,
        location: params.location,
        date: params.date,
        createdById: params.userId,
      },
    });
  }
}
