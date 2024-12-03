import { IDeleteEventService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class DeleteEventController {
  constructor(private deleteEventService: IDeleteEventService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;
      const { eventId } = req.params;
      const { userId } = req;
      const events = await this.deleteEventService.execute({
        eventId: parseInt(eventId),
        userId,
        password,
      });
      return res.status(201).json(events);
    } catch (error) {
      next(error);
    }
  }
}
