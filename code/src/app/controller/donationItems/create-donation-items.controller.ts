import { ICreateDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class CreateDonationItemsController {
  constructor(
    private createDonationItemsService: ICreateDonationItemsService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { donationId } = req.params;
      const { userId } = req;
      const { type, description, quantity } = req.body;

      await this.createDonationItemsService.execute({
        donationId: parseInt(donationId),
        type,
        description,
        quantity,
        userId,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
