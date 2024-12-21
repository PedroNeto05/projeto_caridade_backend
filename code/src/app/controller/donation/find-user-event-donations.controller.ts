// TODO FAZER A ROTA DE ACHAR TODAS AS DOAÇÕES DE UM USUARIO EM UM DETERMINADO EVENTO
import { IFindUserEventDonationsService } from '@/interfaces/donation/donation-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindUserEventDonationsController {
  constructor(private findUserEventDonationsService: IFindUserEventDonationsService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId,eventId } = req.params;

      const donations = await this.findUserEventDonationsService.execute({
        userId: parseInt(userId),
        eventId:parseInt(eventId),
      });
      return res.status(200).json(donations);
    } catch (error) {
      next(error);
    }
  }
}
