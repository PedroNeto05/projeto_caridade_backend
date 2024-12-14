import { prisma } from '@/config/prisma';
import { DeleteUserSubscriptionDTO } from '@/dtos/subscription/delete-subscroption.dto';
import { IDeleteUserSubscriptionRepository } from '@/interfaces/subscription/subscription-repository.interface';

export class DeleteUserSubscriptionRepository
  implements IDeleteUserSubscriptionRepository
{
  async delete(params: DeleteUserSubscriptionDTO): Promise<void> {
    await prisma.subscription.delete({
      where: {
        userId_eventId: {
          userId: params.userId,
          eventId: params.eventId,
        },
      },
    });
  }
}
