import { prisma } from '@/config/prisma';
import { DeleteDonationDTO } from '@/dtos/donation/delete-donation.dto';
import { IDeleteDonationRepository } from '@/interfaces/donation/donation-repository.interface';

export class DeleteDonationRepository implements IDeleteDonationRepository {
  async delete(params: DeleteDonationDTO): Promise<void> {
    await prisma.donation.delete({
      where: {
        id: params.donationId,
      },
    });
  }
}
