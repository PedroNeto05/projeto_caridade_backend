import { IFindEventByIdSerivce } from '@/interfaces/event/event-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class FindEventByIdController {
  constructor(private findEventByIdService: IFindEventByIdSerivce) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      this.findEventByIdService.execute({ id: parseInt(id) });
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}
