import { FindUserEventDonationsDTO } from '@/dtos/donation/find-user-event-donations.dto';
import httpError from 'http-errors';
import { IFindUserEventDonationsService } from '@/interfaces/donation/donation-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { findUserEventDonationsSchema } from '@/schemas/donation.schema';
import { Donation } from '@prisma/client';
import { IFindUserEventDonationsRepository } from '@/interfaces/donation/donation-repository.interface';
import { IFindUserByIdRepository } from '@/interfaces/user/user-repository.interface';
export class FindUserEventDonationsService
  implements IFindUserEventDonationsService
{
  constructor(
    private findEventByIdRepository: IFindEventByIdRepository,
    private findUserEventDonationsRepository: IFindUserEventDonationsRepository,
    private findUserByIdRepository: IFindUserByIdRepository
  ) {}

  async execute(params: FindUserEventDonationsDTO): Promise<Donation[]> {
    const { eventId, userId } = findUserEventDonationsSchema.parse(params);

    const user = await this.findUserByIdRepository.findById(userId);

    if (!user) {
      throw new httpError.NotFound('User not found');
    }

    const event = await this.findEventByIdRepository.findById(eventId);

    if (!event) {
      throw httpError.NotFound('Event not found');
    }

    const donations = await this.findUserEventDonationsRepository.findById({
      userId,
      eventId,
    });

    return donations;
  }
}
