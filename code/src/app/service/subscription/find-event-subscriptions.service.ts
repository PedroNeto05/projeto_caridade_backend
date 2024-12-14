import { FindEventSubscriptionsDTO } from '@/dtos/subscription/find-event-subscriptions.dto';
import { IFindEventSubscriptionsRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { IFindEventSubscriptionsService } from '@/interfaces/subscription/subscription-service.interface';
import { findEventSubscriptionsSchema } from '@/schemas/subscription.schema';
import { Subscription } from '@prisma/client';
export class FindEventSubscriptionsService
  implements IFindEventSubscriptionsService
{
  constructor(
    private findEventSubscriptionsRepository: IFindEventSubscriptionsRepository
  ) {}
  async execute(params: FindEventSubscriptionsDTO): Promise<Subscription[]> {
    const { eventId } = findEventSubscriptionsSchema.parse(params);

    const subscription =
      await this.findEventSubscriptionsRepository.findEventSubscription({
        eventId,
      });

    return subscription;
  }
}
