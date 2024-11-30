import type { Errback, Request, Response, NextFunction } from 'express';

export function errorMiddleware(
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) {}
