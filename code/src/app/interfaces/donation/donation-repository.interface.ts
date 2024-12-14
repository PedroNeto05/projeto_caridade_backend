import { CreateDonationDTO } from '@/dtos/donation/create-donation.dto';
import { Donation } from '@prisma/client';
import { FindUserDonationsDTO } from '@/dtos/donation/find-user-donations.dto';

export interface ICreateDonationRepository {
  save(params: CreateDonationDTO): Promise<void>;
}

export interface IFindUserDonationsRepository {
  findById(params: FindUserDonationsDTO): Promise<Donation[]>;
}
