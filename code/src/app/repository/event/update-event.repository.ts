import { prisma } from '@/config/prisma';
import { UpdateEventDTO } from '@/dtos/event/update-event.dto';
import { IUpdateEventRepository } from '@/interfaces/event/event-repository.interface';

export class UpdateEventRepository implements IUpdateEventRepository {
  async update(params: Partial<UpdateEventDTO>): Promise<void> {
    await prisma.event.update({
      where: {
        id: params.eventId,
        createdById: params.userId,
      },
      data: {
        name: params.newName,
        date: params.newDate,
        description: params.newDescription,
        location: params.newLocation,
      },
    });
  }
}
