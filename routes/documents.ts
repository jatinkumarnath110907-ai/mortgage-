import { Router } from 'express';
const router = Router();

router.post('/upload', (req, res) => {
  res.status(200).json({ message: 'Upload document' });
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'List documents' });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete document' });
});

export default router;
