import { ICreateUserService } from '@/app/service/userService/createUserService/ICreateUserService';
import type { Request, Response } from 'express';

export class CreateUserController {
  constructor(private createUserService: ICreateUserService) {}

  handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      this.createUserService.execute({ name, email, password });

      return res.status(200).send();
    } catch (e) {
      // tratar melhoror os erros

      return res.status(400).json(e);
    }
  }
}
