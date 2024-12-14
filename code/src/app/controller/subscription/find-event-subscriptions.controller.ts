import { IFindEventSubscriptionsService } from '@/interfaces/subscription/subscription-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindEventSubscriptionsController {
  constructor(
    private findEventSubscriptionsService: IFindEventSubscriptionsService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const subscriptions = await this.findEventSubscriptionsService.execute({
        eventId: parseInt(eventId),
      });
      return res.status(201).json(subscriptions);
    } catch (error) {
      next(error);
    }
  }
}
