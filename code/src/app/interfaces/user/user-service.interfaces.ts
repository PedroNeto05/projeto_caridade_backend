import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { FindUserByIdDTO } from '@/dtos/user/get-user.dto';
import { UpdateUserDTO } from '@/dtos/user/update-user.dto';
import { User } from '@prisma/client';

export interface ICreateUserService {
  execute(params: CreateUserDTO): Promise<void>;
}

export interface IUpdateUserService {
  execute(params: UpdateUserDTO): Promise<void>;
}

export interface IFindUserByIdService {
  execute(params: FindUserByIdDTO): Promise<User>;
}
