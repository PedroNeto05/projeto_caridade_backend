import { CreateUserController } from '@/controller/user/create-user.controller';
import { UpdateUserController } from '@/controller/user/update-user.controller';
import { authLogin } from '@/middlewares/authLogin';
import { CreateUserRepository } from '@/repository/user/create-user.repository';
import { FindUserByEmailRepository } from '@/repository/user/find-user-by-email.repository';
import { UpdateUserRepository } from '@/repository/user/update-user.repository';
import { CreateUserService } from '@/service/user/create-user.service';
import { UpdateUserService } from '@/service/user/update-user.service';
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

const updateUserRepository = new UpdateUserRepository();
const updateUserService = new UpdateUserService(
  findUserByEmailRepository,
  updateUserRepository
);
const updateUserController = new UpdateUserController(updateUserService);

userRoutes.put('/', authLogin, (req, res, next) => {
  updateUserController.handle(req, res, next);
});

export { userRoutes };
