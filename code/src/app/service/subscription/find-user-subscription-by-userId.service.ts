import { FindUserSubscriptionByUserIdDTO } from '@/dtos/subscription/find-user-subscription-by-userId.dto';
import { IFindUserScriptionByUserIdRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { IFindUserSubscriptionByUserIdService } from '@/interfaces/subscription/subscription-service.interface';
import { findUserSubscriptionByUserIdSchema } from '@/schemas/subscription.schema';
import { Subscription } from '@prisma/client';
export class FindUserSubscriptionByUserIdService
  implements IFindUserSubscriptionByUserIdService
{
  constructor(
    private findUserSubscriptionByUserIdRepository: IFindUserScriptionByUserIdRepository
  ) {}
  async execute(
    params: FindUserSubscriptionByUserIdDTO
  ): Promise<Subscription[]> {
    const { userId } = findUserSubscriptionByUserIdSchema.parse(params);

    const subscriptions =
      await this.findUserSubscriptionByUserIdRepository.findByUserId({
        userId,
      });

    return subscriptions;
  }
}
