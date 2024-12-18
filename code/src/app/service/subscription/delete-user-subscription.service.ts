import { DeleteUserSubscriptionDTO } from '@/dtos/subscription/delete-subscroption.dto';
import httpError from 'http-errors';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import {
  IDeleteUserSubscriptionRepository,
  IFindSubscriptionByUserIdAndEventIdRepository,
} from '@/interfaces/subscription/subscription-repository.interface';
import { IDeleteUserSubscriptionService } from '@/interfaces/subscription/subscription-service.interface';
import { deleteUserSubscription } from '@/schemas/subscription.schema';
export class DeleteUserSubscriptionService
  implements IDeleteUserSubscriptionService
{
  constructor(
    private deleteUserSubscriptionRepository: IDeleteUserSubscriptionRepository,
    private findEventByIdRepository: IFindEventByIdRepository,
    private findSubscriptionByUserIdAndEventIdRepository: IFindSubscriptionByUserIdAndEventIdRepository
  ) {}

  async execute(params: DeleteUserSubscriptionDTO): Promise<void> {
    const { userId, eventId } = deleteUserSubscription.parse(params);

    const event = await this.findEventByIdRepository.findById(eventId);

    if (!event) {
      throw httpError.NotFound('Event not found');
    }

    const subscription =
      await this.findSubscriptionByUserIdAndEventIdRepository.findByUserIdAndEventId(
        {
          userId,
          eventId,
        }
      );

    if (!subscription) {
      throw httpError.NotFound('Subscription not found');
    }

    await this.deleteUserSubscriptionRepository.delete({ userId, eventId });
  }
}
