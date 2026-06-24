import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  res.status(200).json({ message: 'User registered' });
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: 'User logged in' });
};

export const logout = (req: Request, res: Response) => {
  res.status(200).json({ message: 'User logged out' });
};
