import { Router } from 'express';
import { CreateUserController } from '../controller/userController/create-user-controller';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', (req, res) => {
  createUserController.handle(req, res);
});

export { userRoutes };
