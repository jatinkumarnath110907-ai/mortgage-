import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock Routes (Since actual route files might have issues)
app.post('/api/auth/register', (req: any, res: any) => {
  res.status(200).json({ message: 'Register endpoint', success: true });
});

app.post('/api/auth/login', (req: any, res: any) => {
  res.status(200).json({ message: 'Login endpoint', token: 'mock-token', success: true });
});

app.post('/api/auth/logout', (req: any, res: any) => {
  res.status(200).json({ message: 'Logout endpoint', success: true });
});

app.get('/api/mortgages', (req: any, res: any) => {
  res.status(200).json({ mortgages: [], message: 'Get all mortgages' });
});

app.post('/api/mortgages/apply', (req: any, res: any) => {
  res.status(201).json({ message: 'Mortgage application submitted', success: true });
});

app.get('/api/users/profile', (req: any, res: any) => {
  res.status(200).json({ user: { id: '1', name: 'User', email: 'user@example.com' } });
});

app.get('/api/payments', (req: any, res: any) => {
  res.status(200).json({ payments: [], message: 'Get all payments' });
});

app.get('/api/documents', (req: any, res: any) => {
  res.status(200).json({ documents: [], message: 'Get all documents' });
});

// Health check
app.get('/health', (req: any, res: any) => {
  res.status(200).json({ status: 'OK', message: 'Backend server is running' });
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

// 404 handler
app.use((req: any, res: any) => {
  res.status(404).json({ error: 'Not Found', path: req.path });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API routes available at http://localhost:${PORT}/api/*`);
  console.log(`\nEndpoints:`);
  console.log(`  POST   http://localhost:${PORT}/api/auth/register`);
  console.log(`  POST   http://localhost:${PORT}/api/auth/login`);
  console.log(`  POST   http://localhost:${PORT}/api/auth/logout`);
  console.log(`  GET    http://localhost:${PORT}/api/mortgages`);
  console.log(`  POST   http://localhost:${PORT}/api/mortgages/apply`);
  console.log(`  GET    http://localhost:${PORT}/api/users/profile`);
  console.log(`  GET    http://localhost:${PORT}/api/payments`);
  console.log(`  GET    http://localhost:${PORT}/api/documents`);
});
