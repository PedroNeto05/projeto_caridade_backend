import { IFindEventByIdService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindEventByIdController {
  constructor(private findEventByIdService: IFindEventByIdService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const event = await this.findEventByIdService.execute({
        id: parseInt(id),
      });
      return res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }
}
