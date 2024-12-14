import { prisma } from '@/config/prisma';
import { CreateSubscriptionDTO } from '@/dtos/subscription/create-subscroption.dto';
import { ICreateSubscriptionRepository } from '@/interfaces/subscription/subscription-repository.interface';

export class CreateSubscriptionRepository
  implements ICreateSubscriptionRepository
{
  async save(params: CreateSubscriptionDTO): Promise<void> {
    await prisma.subscription.create({
      data: {
        userId: params.userId,
        eventId: params.eventId,
      },
    });
  }
}
