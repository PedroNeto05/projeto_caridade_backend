import { CreateUserDTO } from '@/dtos/user/create-user.dto';

export interface ICreateUserService {
  execute(params: CreateUserDTO): Promise<void>;
}
