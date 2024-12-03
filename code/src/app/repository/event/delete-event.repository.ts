import { prisma } from '@/config/prisma';
import { DeleteEventDTO } from '@/dtos/event/delete-event.dto';
import { IDeleteEventRepository } from '@/interfaces/event/event-repository.interface';

export class DeleteEventRepository implements IDeleteEventRepository {
  async delete(params: DeleteEventDTO): Promise<void> {
    await prisma.event.delete({
      where: {
        createdById: params.userId,
        id: params.eventId,
      },
    });
  }
}
