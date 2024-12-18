import { prisma } from '@/config/prisma';
import { IFindDoantionByIdRepository } from '@/interfaces/donation/donation-repository.interface';
import { Donation } from '@prisma/client';

export class FindDonationByIdRepository implements IFindDoantionByIdRepository {
  async findById(donationId: number): Promise<Donation | null> {
    const donation = await prisma.donation.findUnique({
      where: {
        id: donationId,
      },
    });

    return donation;
  }
}
