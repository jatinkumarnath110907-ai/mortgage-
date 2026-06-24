import express from 'express';
import authRoutes from './auth';
import userRoutes from './users';
import mortgageRoutes from './mortgages';
import paymentRoutes from './payments';
import documentRoutes from './documents';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/mortgages', mortgageRoutes);
router.use('/payments', paymentRoutes);
router.use('/documents', documentRoutes);

export default router;
