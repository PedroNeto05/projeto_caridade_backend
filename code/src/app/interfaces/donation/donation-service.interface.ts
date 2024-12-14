import { CreateDonationDTO } from '@/dtos/donation/create-donation.dto';
import { FindEventDonationsDTO } from '@/dtos/donation/find-event-donations.dto';
import { FindUserDonationsDTO } from '@/dtos/donation/find-user-donations.dto';
import { Donation } from '@prisma/client';

export interface ICreateDonationService {
  execute(params: CreateDonationDTO): Promise<void>;
}

export interface IFindUserDonationsService {
  execute(params: FindUserDonationsDTO): Promise<Donation[]>;
}

export interface IFindEventDonationsService {
  execute(params: FindEventDonationsDTO): Promise<Donation[]>;
}
