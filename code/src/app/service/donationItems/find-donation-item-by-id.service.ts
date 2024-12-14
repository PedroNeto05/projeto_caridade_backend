import httpError from 'http-errors';
import { IFindDonationItemByIdService } from '@/interfaces/donationItems/donation-items-service.interface';
import { FindDonationItemByIdDTO } from '@/dtos/donationItems/find-donation-item-by-id.dto';
import { DonationItem } from '@prisma/client';
import { findDonationItemByIdSchema } from '@/schemas/donationItems.schema';
import { IFindDonationItemByIdRepository } from '@/interfaces/donationItems/donation-items-repository.interface';

export class FindDonationItemByIdService implements IFindDonationItemByIdService {
  constructor(private findDonationItemByIdRepository: IFindDonationItemByIdRepository) {}
  async execute(params: FindDonationItemByIdDTO): Promise<DonationItem | null> {
    const { id } = findDonationItemByIdSchema.parse(params);

    const donationitem = await this.findDonationItemByIdRepository.findById(id);

    if (!donationitem) {
      throw new httpError.NotFound('Donation item not found');
    }

    return donationitem;
  }
}
