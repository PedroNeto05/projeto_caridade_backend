import { prisma } from '@/config/prisma';
import { FindUserSubscriptionByUserIdDTO } from '@/dtos/subscription/find-user-subscription-by-userId.dto';
import { IFindUserScriptionByUserIdRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { Subscription } from '@prisma/client';

export class FindUserSubscriptionByUserIdRepository
  implements IFindUserScriptionByUserIdRepository
{
  async findByUserId(
    params: FindUserSubscriptionByUserIdDTO
  ): Promise<Subscription[]> {
    const subscription = await prisma.subscription.findMany({
      where: {
        userId: params.userId,
      },
    });

    return subscription;
  }
}
