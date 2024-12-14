import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';
import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';

export interface ICreateDonationItemsService {
  execute(params: CreateDonationItemsDTO): Promise<void>;
}

export interface IDeleteDonationItemsService {
  execute(params: DeleteDonationItemsDTO): Promise<void>;
}