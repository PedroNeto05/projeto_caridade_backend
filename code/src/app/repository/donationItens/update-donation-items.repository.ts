import { prisma } from '@/config/prisma';
import { UpdateDonationItemsDTO } from '@/dtos/donationItems/update-donation-items.dto';
import { IUpdateDonationItemsRepository } from '@/interfaces/donationItems/donation-items-repository.interface';

export class UpdateDonationItemsRepository
  implements IUpdateDonationItemsRepository
{
  async update(params: UpdateDonationItemsDTO): Promise<void> {
    await prisma.donationItem.update({
      where: {
        id: params.donationItemId,
      },
      data: {
        type: params.newType,
        description: params.newDescription,
        quantity: params.newQuantity,
      },
    });
  }
}
