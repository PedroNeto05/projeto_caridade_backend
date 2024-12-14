import { prisma } from '@/config/prisma';
import { CreateDonationDTO } from '@/dtos/donation/create-donation.dto';
import { ICreateDonationRepository } from '@/interfaces/donation/donation-repository.interface';

export class CreateDonationRepository implements ICreateDonationRepository {
  async save(params: CreateDonationDTO): Promise<void> {
    await prisma.donation.create({
      data: {
        userId: params.subscriberId,
        eventId: params.eventId,
      },
    });
  }
}
