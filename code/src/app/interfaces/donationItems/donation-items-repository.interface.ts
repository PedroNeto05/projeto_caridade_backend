import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';
import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';

export interface ICreateDonationItemsRepository {
  save(params: CreateDonationItemsDTO): Promise<void>;
}
export interface IDeleteDonationItemsRepository {
  delete(params: DeleteDonationItemsDTO): Promise<void>;
}