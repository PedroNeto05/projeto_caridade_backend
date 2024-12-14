import { ICreateDonationService } from '@/interfaces/donation/donation-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class CreateDonationController {
  constructor(private createDonationService: ICreateDonationService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req;
      const { eventId, subscriberId } = req.params;

      await this.createDonationService.execute({
        userId,
        eventId: parseInt(eventId),
        subscriberId: parseInt(subscriberId),
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
