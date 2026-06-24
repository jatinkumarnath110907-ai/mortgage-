import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get mortgages' });
});

router.post('/apply', (req, res) => {
  res.status(200).json({ message: 'Apply for mortgage' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Update mortgage' });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete mortgage' });
});

export default router;
