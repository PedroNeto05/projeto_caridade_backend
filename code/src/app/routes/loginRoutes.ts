import { LoginController } from '@/controller/login/login.controller';
import { FindUserByEmailRepository } from '@/repository/user/find-user-by-email.repository';
import { LoginService } from '@/service/login/login.service';
import { Router } from 'express';

const loginRoutes = Router();

const findUserByEmailRepository = new FindUserByEmailRepository();
const loginService = new LoginService(findUserByEmailRepository);
const loginController = new LoginController(loginService);

loginRoutes.post('/', (req, res, next) => {
  loginController.handle(req, res, next);
});

export { loginRoutes };
