import { IFindEventByCreatedByService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindEventByCreatedByController {
  constructor(
    private findEventByCreatedByService: IFindEventByCreatedByService
  ) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { createdById } = req.params;

      const event = await this.findEventByCreatedByService.execute({
        createdBy: parseInt(createdById),
      });
      return res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }
}
