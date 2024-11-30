import { IUpdateUserService } from '@/interfaces/user/user-service.interfaces';
import type { Request, Response, NextFunction } from 'express';

export class UpdateUserController {
  constructor(private updateUserService: IUpdateUserService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { newName, newEmail, currentPassword, newPassword } = req.body;

      this.updateUserService.execute({
        newName,
        newEmail,
        currentEmail: req.userEmail,
        currentPassword,
        newPassword,
      });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}
