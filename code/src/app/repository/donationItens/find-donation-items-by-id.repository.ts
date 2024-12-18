import { prisma } from '@/config/prisma';
import { IFindDonationItemByIdRepository } from '@/interfaces/donationItems/donation-items-repository.interface';
import { DonationItem } from '@prisma/client';

export class FindDonationItemByIdRepository
  implements IFindDonationItemByIdRepository
{
  async findById(donationItemId: number): Promise<DonationItem | null> {
    const donationItem = await prisma.donationItem.findUnique({
      where: {
        id: donationItemId,
      },
    });

    return donationItem;
  }
}
