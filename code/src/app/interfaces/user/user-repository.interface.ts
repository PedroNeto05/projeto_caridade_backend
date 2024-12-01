import { CreateUserDTO } from '@/dtos/user/create-user.dto';
import { DeleteUserDTO } from '@/dtos/user/delete-user.dto';
import { UpdateUserDTO } from '@/dtos/user/update-user.dto';
import { User } from '@prisma/client';

export interface ICreateUserRepository {
  save(params: CreateUserDTO): Promise<void>;
}

export interface IFindUserByEmailRepository {
  findByEmail(email: string): Promise<User | null>;
}

export interface IUpdateUserRepository {
  update(params: UpdateUserDTO): Promise<void>;
}

export interface IFindUserByIdRepository {
  findById(id: number): Promise<User | null>;
}

export interface IDeleteUserRepository {
  delete(params: DeleteUserDTO): Promise<void>;
}
