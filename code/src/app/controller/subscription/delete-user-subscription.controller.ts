import { IDeleteUserSubscriptionService } from '@/interfaces/subscription/subscription-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class DeleteUserSubscriptionController {
  constructor(
    private deleteUserSubscriptionService: IDeleteUserSubscriptionService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const { userId } = req;

      await this.deleteUserSubscriptionService.execute({
        eventId: parseInt(eventId),
        userId,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
