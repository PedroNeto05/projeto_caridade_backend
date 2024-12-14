import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';

export interface ICreateDonationItemsRepository {
  save(params: CreateDonationItemsDTO): Promise<void>;
}
