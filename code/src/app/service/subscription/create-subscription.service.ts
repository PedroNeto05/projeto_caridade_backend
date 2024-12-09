import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import {
  ICreateSubscriptionRepository,
  IFindSubscriptionByUserIdAndEventIdRepository,
} from '@/interfaces/subscription/subscription-repository.interface';
import { ICreateSubscriptionService } from '@/interfaces/subscription/subscription-service.interface';
import { createSubscriptionSchema } from '@/schemas/subscription.schema';
import httpError from 'http-errors';
export class CreateEventService implements ICreateSubscriptionService {
  constructor(
    private findSubscriptionByUserIdAndEventIdRepository: IFindSubscriptionByUserIdAndEventIdRepository,
    private createSubscriptionRepository: ICreateSubscriptionRepository,
    private findEventByIdRepository: IFindEventByIdRepository
  ) {}
  async execute(params: CreateSubscriptionDTO): Promise<void> {
    const { eventId, userId } = createSubscriptionSchema.parse(params);

    const event = this.findEventByIdRepository.findById(eventId);

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

    if (subscription) {
      throw httpError.Conflict('Subscripiton already exist');
    }

    await this.createSubscriptionRepository.save({ userId, eventId });
  }
}
