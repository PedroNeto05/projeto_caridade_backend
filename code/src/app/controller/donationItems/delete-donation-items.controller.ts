import { IDeleteDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class DeleteDonationItemsController {
  constructor(
    private deleteDonationItemsService: IDeleteDonationItemsService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { donationId, donationItemId } = req.params;
      const { userId } = req;

      await this.deleteDonationItemsService.execute({
        donationId: parseInt(donationId),
        donationItemId: parseInt(donationItemId),
        userId,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
