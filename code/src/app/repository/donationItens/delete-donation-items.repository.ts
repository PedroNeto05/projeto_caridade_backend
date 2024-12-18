import { prisma } from '@/config/prisma';
import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';
import { IDeleteDonationItemsRepository } from '@/interfaces/donationItems/donation-items-repository.interface';

export class DeleteDonationItemsRepository
  implements IDeleteDonationItemsRepository
{
  async delete(params: DeleteDonationItemsDTO): Promise<void> {
    await prisma.donationItem.delete({
      where: {
        id: params.donationItemId,
      },
    });
  }
}
