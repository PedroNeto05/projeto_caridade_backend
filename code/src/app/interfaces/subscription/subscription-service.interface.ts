import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';

export interface ICreateSubscriptionService {
  execute(params: CreateSubscriptionDTO): Promise<void>;
}
