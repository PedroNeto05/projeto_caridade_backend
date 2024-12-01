import { IDeleteUserService } from '@/interfaces/user/user-service.interfaces';
import type { Request, Response, NextFunction } from 'express';

export class DeleteUserController {
  constructor(private deleteUserService: IDeleteUserService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { userEmail } = req;
      const { password } = req.body;
      await this.deleteUserService.execute({ email: userEmail, password });
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
