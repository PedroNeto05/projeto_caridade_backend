import { prisma } from '@/config/prisma';
import { FindEventDonationsDTO } from '@/dtos/donation/find-event-donations.dto';
import { IFindEventDonationsService } from '@/interfaces/donation/donation-service.interface';
import { Donation } from '@prisma/client';

export class FindEventDonationsService implements IFindEventDonationsService {
  async execute(params: FindEventDonationsDTO): Promise<Donation[]> {
    const donations = await prisma.donation.findMany({
      where: {
        eventId: params.eventId,
      },
    });

    return donations;
  }
}
