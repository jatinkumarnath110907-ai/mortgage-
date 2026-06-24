import { Request, Response } from 'express';

export const getUserProfile = (req: Request, res: Response) => {
  res.status(200).json({ message: 'User profile' });
};

export const updateUser = (req: Request, res: Response) => {
  res.status(200).json({ message: 'User updated' });
};
