import { IUpdateDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class UpdateDonationItemsController {
  constructor(
    private updateDonationItemsService: IUpdateDonationItemsService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { donationItemId } = req.params;
      const { userId } = req;
      const { newType, newDescription, newQuantity } = req.body;

      await this.updateDonationItemsService.execute({
        donationItemId: parseInt(donationItemId),
        newType,
        newDescription,
        newQuantity,
        userId,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
