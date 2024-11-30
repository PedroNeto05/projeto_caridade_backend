import { ILoginService } from '@/interfaces/login/login-service.interface';
import type { Request, Response, NextFunction } from 'express';

export class LoginController {
  constructor(private loginService: ILoginService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const token = await this.loginService.execute({ email, password });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
