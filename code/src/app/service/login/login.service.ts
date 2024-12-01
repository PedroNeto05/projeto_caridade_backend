import httpError from 'http-errors';
import { LoginDTO } from '@/dtos/login/login.dto';
import {
  ILoginService,
  LoginToken,
} from '@/interfaces/login/login-service.interface';
import { IFindUserByEmailRepository } from '@/interfaces/user/user-repository.interface';
import { loginSchema } from '@/schemas/login.schema';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '@/config/env';

export class LoginService implements ILoginService {
  constructor(private findUserByEmailRepository: IFindUserByEmailRepository) {}

  async execute(params: LoginDTO): Promise<LoginToken> {
    const { email, password } = loginSchema.parse(params);

    const user = await this.findUserByEmailRepository.findByEmail(email);

    if (!user) {
      throw new httpError.Unauthorized('Invalid email or password');
    }

    const passwordRight = await compare(password, user.password);

    if (!passwordRight) {
      throw new httpError.Unauthorized('Invalid email or password');
    }

    const token = jwt.sign({ id: user.id, email }, env.SECRET_KEY, {
      expiresIn: 60,
    });

    return token;
  }
}
