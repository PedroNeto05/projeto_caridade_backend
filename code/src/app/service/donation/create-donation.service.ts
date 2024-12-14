import { CreateDonationDTO } from '@/dtos/donation/create-donation.dto';
import { ICreateDonationRepository } from '@/interfaces/donation/donation-repository.interface';
import { ICreateDonationService } from '@/interfaces/donation/donation-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { IFindSubscriptionByUserIdAndEventIdRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { createDonationSchema } from '@/schemas/donation.schema';
import httpError from 'http-errors';
export class CreateDonationService implements ICreateDonationService {
  constructor(
    private findSubscriptionByUserIdAndEventId: IFindSubscriptionByUserIdAndEventIdRepository,
    private findEventById: IFindEventByIdRepository,
    private createDonationRepository: ICreateDonationRepository
  ) {}

  async execute(params: CreateDonationDTO): Promise<void> {
    const { userId, eventId, subscriberId } =
      createDonationSchema.parse(params);

    const subscription =
      await this.findSubscriptionByUserIdAndEventId.findByUserIdAndEventId({
        userId: subscriberId,
        eventId,
      });

    if (!subscription) {
      throw httpError.NotFound('user has no subscription');
    }

    const event = await this.findEventById.findById(eventId);

    if (!event) return;

    if (event.createdById !== userId) {
      throw httpError.Unauthorized(
        'you do not have permission to access this resource.'
      );
    }

    await this.createDonationRepository.save({ userId, eventId, subscriberId });
  }
}
