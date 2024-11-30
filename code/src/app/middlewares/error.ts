import { ZodError } from 'zod';
import type { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    const errors = err.errors.map((error) => ({
      field: error.path.join('.'),
      message: error.message,
    }));

    return res.status(400).json({
      error: 'Validation error',
      details: errors,
    });
  }

  if (err instanceof createError.HttpError) {
    return res.status(err.status).json({
      error: err.message,
      details: err.details || null,
    });
  }

  return res.status(500).json({
    error: 'Internal server error',
    message: err.message,
  });
}
