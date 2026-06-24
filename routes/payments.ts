import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get payments' });
});

router.post('/create', (req, res) => {
  res.status(200).json({ message: 'Create payment' });
});

export default router;
