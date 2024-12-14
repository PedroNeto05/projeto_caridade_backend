import { prisma } from '@/config/prisma';
import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';
import { ICreateDonationItemsRepository } from '@/interfaces/donationItems/donation-items-repository.interface';

export class CreateDonationItemsRepository
  implements ICreateDonationItemsRepository
{
  async save(params: CreateDonationItemsDTO): Promise<void> {
    await prisma.donationItem.create({
      data: {
        type: params.type,
        description: params.description,
        quantity: params.quantity,
        donationId: params.donationId,
      },
    });
  }
}
