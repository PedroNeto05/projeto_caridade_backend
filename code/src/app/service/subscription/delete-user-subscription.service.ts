import { DeleteUserSubscriptionDTO } from '@/dtos/subscription/delete-subscroption.dto';
import { IDeleteUserSubscriptionRepository } from '@/interfaces/subscription/subscription-repository.interface';
import { IDeleteUserSubscriptionService } from '@/interfaces/subscription/subscription-service.interface';
import { deleteUserSubscription } from '@/schemas/subscription.schema';
export class DeleteUserSubscriptionService
  implements IDeleteUserSubscriptionService
{
  constructor(
    private deleteUserSubscriptionRepository: IDeleteUserSubscriptionRepository
  ) {}

  async execute(params: DeleteUserSubscriptionDTO): Promise<void> {
    const { userId, eventId } = deleteUserSubscription.parse(params);

    await this.deleteUserSubscriptionRepository.delete({ userId, eventId });
  }
}
