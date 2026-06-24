export const config = {
  jwtSecret: process.env.JWT_SECRET || 'change-me',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mortgage-app',
  emailUser: process.env.EMAIL_USER || '',
  emailPass: process.env.EMAIL_PASS || ''
};
