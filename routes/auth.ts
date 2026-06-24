import { Router } from 'express';
const router = Router();

router.post('/register', (req, res) => {
  res.status(200).json({ message: 'Register endpoint' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login endpoint' });
});

router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout endpoint' });
});

export default router;
