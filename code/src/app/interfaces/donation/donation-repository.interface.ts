import { CreateDonationDTO } from '@/dtos/donation/create-donation.dto';

export interface ICreateDonationRepository {
  save(params: CreateDonationDTO): Promise<void>;
}
