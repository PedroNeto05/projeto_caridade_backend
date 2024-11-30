import { LoginDTO } from '@/dtos/login/login.dto';

export type LoginToken = string;

export interface ILoginService {
  execute(params: LoginDTO): Promise<LoginToken>;
}
