import { IFindUserSubscriptionByUserIdService } from '@/interfaces/subscription/subscription-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindUserSubscriptionByUserIdController {
  constructor(
    private findUserSubscriptionsByUserIdService: IFindUserSubscriptionByUserIdService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const subscription =
        await this.findUserSubscriptionsByUserIdService.execute({
          userId: parseInt(userId),
        });
      return res.status(200).json(subscription);
    } catch (error) {
      next(error);
    }
  }
}
