import { CreateUserController } from '@/controller/user/create-user.controller';
import { CreateUserRepository } from '@/repository/user/create-user.repository';
import { FindUserByEmailRepository } from '@/repository/user/find-user-by-email.repository';
import { CreateUserService } from '@/service/user/create-user.service';
import { Router } from 'express';

const userRoutes = Router();

const findUserByEmailRepository = new FindUserByEmailRepository();
const createUserRepository = new CreateUserRepository();
const createUserService = new CreateUserService(
  createUserRepository,
  findUserByEmailRepository
);
const createUserController = new CreateUserController(createUserService);

userRoutes.post('/', (req, res, next) => {
  createUserController.handle(req, res, next);
});

export { userRoutes };
