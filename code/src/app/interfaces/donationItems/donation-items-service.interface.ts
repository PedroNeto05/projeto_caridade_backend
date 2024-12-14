import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';

export interface ICreateDonationItemsService {
  execute(params: CreateDonationItemsDTO): Promise<void>;
}
