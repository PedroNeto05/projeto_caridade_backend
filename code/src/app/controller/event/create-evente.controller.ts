import { ICreateEventService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class CreateEventController {
  constructor(private createEventService: ICreateEventService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, location, date, description } = req.body;
      const { userId } = req;

      await this.createEventService.execute({
        userId,
        name,
        location,
        date,
        description,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
