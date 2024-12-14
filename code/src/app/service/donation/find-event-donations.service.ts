import { FindEventDonationsDTO } from '@/dtos/donation/find-event-donations.dto';
import { IFindEventDonationsRepository } from '@/interfaces/donation/donation-repository.interface';
import { IFindEventDonationsService } from '@/interfaces/donation/donation-service.interface';
import { findEventDonationsSchema } from '@/schemas/donation.schema';
import { Donation } from '@prisma/client';
export class FindEventDonationsService implements IFindEventDonationsService {
  constructor(
    private findEventDonationsRepository: IFindEventDonationsRepository
  ) {}
  async execute(params: FindEventDonationsDTO): Promise<Donation[]> {
    const { eventId } = findEventDonationsSchema.parse(params);

    const donations = await this.findEventDonationsRepository.findById({
      eventId,
    });

    return donations;
  }
}
