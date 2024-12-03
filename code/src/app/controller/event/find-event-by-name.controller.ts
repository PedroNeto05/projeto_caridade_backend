import { IFindEventByNameService } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindEventByNameController {
  constructor(private findEventByNameService: IFindEventByNameService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.params;

      const events = await this.findEventByNameService.execute({ name });

      return res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  }
}
