import { prisma } from '@/config/prisma';
import { FindEventDonationsDTO } from '@/dtos/donation/find-event-donations.dto';
import { IFindEventDonationsRepository } from '@/interfaces/donation/donation-repository.interface';
import { Donation } from '@prisma/client';

export class FindEventDonationsRepository
  implements IFindEventDonationsRepository
{
  async findById(params: FindEventDonationsDTO): Promise<Donation[]> {
    const donations = await prisma.donation.findMany({
      where: {
        eventId: params.eventId,
      },
    });

    return donations;
  }
}
