import { ICreateSubscriptionService } from '@/interfaces/subscription/subscription-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class CreateSubscriptionController {
  constructor(private createSubscriptionService: ICreateSubscriptionService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const { userId } = req;

      await this.createSubscriptionService.execute({
        eventId: parseInt(eventId),
        userId,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
