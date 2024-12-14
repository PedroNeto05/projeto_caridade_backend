import { IDeleteDonationService } from '@/interfaces/donation/donation-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class DeleteEventController {
  constructor(private deleteDonationService: IDeleteDonationService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req;
      const { eventId, donationId } = req.params;

      await this.deleteDonationService.execute({
        userId,
        eventId: parseInt(eventId),
        donationId: parseInt(donationId),
      });
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
