import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';
import { DeleteUserSubscriptionDTO } from '@/dtos/subscription/delete-subscroption.dto';
import { FindEventSubscriptionsDTO } from '@/dtos/subscription/find-event-subscriptions.dto';
import { FindSubscriptionByUserIdAndEventIdDTO } from '@/dtos/subscription/find-subscription-by-userId-end-eventId.dto';
import { FindUserSubscriptionByUserIdDTO } from '@/dtos/subscription/find-user-subscription-by-userId.dto';
import { Subscription } from '@prisma/client';

export interface ICreateSubscriptionRepository {
  save(params: CreateSubscriptionDTO): Promise<void>;
}

export interface IFindSubscriptionByUserIdAndEventIdRepository {
  findByUserIdAndEventId(
    params: FindSubscriptionByUserIdAndEventIdDTO
  ): Promise<Subscription | null>;
}

export interface IFindUserScriptionByUserIdRepository {
  findByUserId(
    params: FindUserSubscriptionByUserIdDTO
  ): Promise<Subscription[]>;
}

export interface IFindEventSubscriptionsRepository {
  findEventSubscription(
    params: FindEventSubscriptionsDTO
  ): Promise<Subscription[]>;
}

export interface IDeleteUserSubscriptionRepository {
  delete(params: DeleteUserSubscriptionDTO): Promise<void>;
}
