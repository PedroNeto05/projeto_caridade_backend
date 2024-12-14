import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';
import { DeleteUserSubscriptionDTO } from '@/dtos/subscription/delete-subscroption.dto';
import { FindEventSubscriptionsDTO } from '@/dtos/subscription/find-event-subscriptions.dto';
import { FindUserSubscriptionByUserIdDTO } from '@/dtos/subscription/find-user-subscription-by-userId.dto';
import { Subscription } from '@prisma/client';

export interface ICreateSubscriptionService {
  execute(params: CreateSubscriptionDTO): Promise<void>;
}

export interface IFindUserSubscriptionByUserIdService {
  execute(params: FindUserSubscriptionByUserIdDTO): Promise<Subscription[]>;
}

export interface IFindEventSubscriptionsService {
  execute(params: FindEventSubscriptionsDTO): Promise<Subscription[]>;
}

export interface IDeleteUserSubscriptionService {
  execute(params: DeleteUserSubscriptionDTO): Promise<void>;
}
