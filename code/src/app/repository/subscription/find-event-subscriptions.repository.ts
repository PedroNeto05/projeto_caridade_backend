import { prisma } from '@/config/prisma';
import { FindEventSubscriptionsDTO } from '@/dtos/subscription/find-event-subscriptions.dto';
import { IFindEventSubscriptionsRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { Subscription } from '@prisma/client';
export class FindEventSubscriptionsRepository
  implements IFindEventSubscriptionsRepository
{
  async findEventSubscription(
    params: FindEventSubscriptionsDTO
  ): Promise<Subscription[]> {
    const subscription = await prisma.subscription.findMany({
      where: {
        eventId: params.eventId,
      },
    });

    return subscription;
  }
}
