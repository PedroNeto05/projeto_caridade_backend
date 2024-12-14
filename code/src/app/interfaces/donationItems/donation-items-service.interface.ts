import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';
import { UpdateDonationItemsDTO } from '@/dtos/donationItems/update-donation-items.dto';
import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';
import { FindDonationItemByIdDTO } from '@/dtos/donationItems/find-donation-item-by-id.dto';
import { DonationItem } from '@prisma/client';

export interface ICreateDonationItemsService {
  execute(params: CreateDonationItemsDTO): Promise<void>;
}
export interface IUpdateDonationItemsService {
  execute(params: UpdateDonationItemsDTO): Promise<void>;
}
export interface IDeleteDonationItemsService {
  execute(params: DeleteDonationItemsDTO): Promise<void>;
}
export interface IFindDonationItemByIdService {
  execute(params: FindDonationItemByIdDTO): Promise<DonationItem | null>;
}