import { IFindUserByIdService } from '@/interfaces/user/user-service.interfaces';
import type { Request, Response, NextFunction } from 'express';

export class FindUserByIdController {
  constructor(private findUserByIdService: IFindUserByIdService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = await this.findUserByIdService.execute({ id });

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
