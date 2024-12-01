import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { DeleteUserDTO } from '@/dtos/user/delete-user.dto';
import { FindUserByIdDTO } from '@/dtos/user/find-user-by-id.dto';
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

export interface IDeleteUserService {
  execute(params: DeleteUserDTO): Promise<void>;
}
