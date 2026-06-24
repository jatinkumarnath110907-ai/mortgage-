import { Router } from 'express';
const router = Router();

router.get('/profile', (req, res) => {
  res.status(200).json({ message: 'User profile endpoint' });
});

router.put('/update', (req, res) => {
  res.status(200).json({ message: 'Update user endpoint' });
});

export default router;
