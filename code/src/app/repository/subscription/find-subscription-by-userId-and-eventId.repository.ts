import { prisma } from '@/config/prisma';
import { FindSubscriptionByUserIdAndEventIdDTO } from '@/dtos/subscription/find-subscription-by-userId-end-eventId.dto';
import { IFindSubscriptionByUserIdAndEventIdRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { Subscription } from '@prisma/client';

export class FindSubscriptionByUserIdAndEventIdRepository
  implements IFindSubscriptionByUserIdAndEventIdRepository
{
  async findByUserIdAndEventId(
    params: FindSubscriptionByUserIdAndEventIdDTO
  ): Promise<Subscription | null> {
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: params.userId,
        eventId: params.eventId,
      },
    });

    return subscription;
  }
}
