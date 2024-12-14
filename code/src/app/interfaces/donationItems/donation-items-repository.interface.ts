import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';
import { UpdateDonationItemsDTO } from '@/dtos/donationItems/update-donation-items.dto';
import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';
import { DonationItem } from '@prisma/client';

export interface ICreateDonationItemsRepository {
  save(params: CreateDonationItemsDTO): Promise<void>;
}
export interface IUpdateDonationItemsRepository {
  update(params: UpdateDonationItemsDTO): Promise<void>;
}
export interface IDeleteDonationItemsRepository {
  delete(params: DeleteDonationItemsDTO): Promise<void>;
}
export interface IFindDonationItemByIdRepository {
  findById(doantionItemId: number): Promise<DonationItem | null>;
}