import { IFindEventDonationsService } from '@/interfaces/donation/donation-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindUserDonationsController {
  constructor(private findEventDonationsService: IFindEventDonationsService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const donations = await this.findEventDonationsService.execute({
        eventId: parseInt(eventId),
      });
      return res.status(200).json(donations);
    } catch (error) {
      next(error);
    }
  }
}
