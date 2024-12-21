import { prisma } from '@/config/prisma';
import { FindUserEventDonationsDTO } from '@/dtos/donation/find-user-event-donations.dto';
import { IFindUserEventDonationsRepository } from '@/interfaces/donation/donation-repository.interface';
import { Donation } from '@prisma/client';

export class FindUserEventDonationsRepository
  implements IFindUserEventDonationsRepository
{
  async findById(params: FindUserEventDonationsDTO): Promise<Donation[]> {
    const donations = prisma.donation.findMany({
      where: {
        userId: params.userId,
        eventId: params.eventId,
      },
      include: {
        DonationItem: true,
      },
    });

    return donations;
  }
}
