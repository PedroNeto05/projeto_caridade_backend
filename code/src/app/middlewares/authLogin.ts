import { env } from '@/config/env';
import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserToken {
  id: string;
  email: string;
}

export function authLogin(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      error: 'login required',
      details: null,
    });
    return;
  }

  const authToken = authorization.split(' ');

  const [, token] = authToken;

  try {
    const { id, email } = jwt.verify(token, env.SECRET_KEY) as UserToken;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    res.status(401).json({
      error: 'invalid token',
      details: null,
    });

    return;
  }
}
