import { IFindUserDonationsService } from '@/interfaces/donation/donation-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindUserDonationsController {
  constructor(private findUserDonationsService: IFindUserDonationsService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req;

      const donations = await this.findUserDonationsService.execute({
        userId,
      });
      return res.status(200).json(donations);
    } catch (error) {
      next(error);
    }
  }
}
