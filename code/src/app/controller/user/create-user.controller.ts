import { ICreateUserService } from '@/interfaces/user/user-service.interfaces';
import type { Request, Response, NextFunction } from 'express';

export class CreateUserController {
  constructor(private createUserService: ICreateUserService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      await this.createUserService.execute({ name, email, password });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}
