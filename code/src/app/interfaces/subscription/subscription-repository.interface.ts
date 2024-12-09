import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';
import { FindSubscriptionByUserIdAndEventIdDTO } from '@/dtos/subscription/find-subscription-by-userId-end-eventId.dto';
import { Subscription } from '@prisma/client';

export interface ICreateSubscriptionRepository {
  save(params: CreateSubscriptionDTO): Promise<void>;
}

export interface IFindSubscriptionByUserIdAndEventIdRepository {
  findByUserIdAndEventId(
    params: FindSubscriptionByUserIdAndEventIdDTO
  ): Promise<Subscription | null>;
}
