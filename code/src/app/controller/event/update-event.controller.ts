import { IUpdateEventService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class UpdateCreateEventController {
  constructor(private updateEventService: IUpdateEventService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { newName, newDate, newDescription, newLocation } = req.body;
      const { userId } = req;
      const { id } = req.params;

      await this.updateEventService.execute({
        userId,
        newName,
        newDate,
        newDescription,
        newLocation,
        eventId: parseInt(id),
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
