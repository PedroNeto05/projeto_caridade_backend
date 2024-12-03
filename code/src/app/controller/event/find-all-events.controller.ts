import { IFindAllEventsService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindAllEventsController {
  constructor(private findAllEventsService: IFindAllEventsService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const events = await this.findAllEventsService.execute();
      return res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  }
}
