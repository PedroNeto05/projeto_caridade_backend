export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserService {
  execute(params: CreateUserParams): void;
}
