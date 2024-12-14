import { prisma } from '@/config/prisma';
import { FindUserDonationsDTO } from '@/dtos/donation/find-user-donations.dto';
import { IFindUserDonationsService } from '@/interfaces/donation/donation-service.interface';
import { Donation } from '@prisma/client';

export class FindUserDonationsService implements IFindUserDonationsService {
  async execute(params: FindUserDonationsDTO): Promise<Donation[]> {
    const donations = await prisma.donation.findMany({
      where: {
        userId: params.userId,
      },
    });

    return donations;
  }
}
