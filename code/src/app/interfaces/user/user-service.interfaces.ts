import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { UpdateUserDTO } from '@/dtos/user/update-user.dto';

export interface ICreateUserService {
  execute(params: CreateUserDTO): Promise<void>;
}

export interface IUpdateUserService {
  execute(params: UpdateUserDTO): Promise<void>;
}
