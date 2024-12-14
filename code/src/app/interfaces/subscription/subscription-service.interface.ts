import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';
import { FindUserSubscriptionByUserIdDTO } from '@/dtos/subscription/find-user-subscription-by-userId.dto';
import { Subscription } from '@prisma/client';

export interface ICreateSubscriptionService {
  execute(params: CreateSubscriptionDTO): Promise<void>;
}

export interface IFindUserSubscriptionByUserIdService {
  execute(params: FindUserSubscriptionByUserIdDTO): Promise<Subscription[]>;
}
