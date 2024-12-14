import { CreateDonationDTO } from '@/dtos/donation/create-donation.dto';

export interface ICreateDonationService {
  execute(params: CreateDonationDTO): Promise<void>;
}
