import { prisma } from '@/config/prisma';
import { FindUserDonationsDTO } from '@/dtos/donation/find-user-donations.dto';
import { IFindUserDonationsRepository } from '@/interfaces/donation/donation-repository.interface';
import { Donation } from '@prisma/client';

export class FindUserDonationsRepository
  implements IFindUserDonationsRepository
{
  async findById(params: FindUserDonationsDTO): Promise<Donation[]> {
    const donations = await prisma.donation.findMany({
      where: {
        userId: params.userId,
      },
    });

    return donations;
  }
}
