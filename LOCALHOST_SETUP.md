# Localhost Development Environment

Configure these environment variables for local development:

```
# Backend Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/mortgage-app

# JWT
JWT_SECRET=your-secret-key-here

# Email Services (optional for local)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Optional: AI/ML
OPENAI_API_KEY=your-openai-key
```

## Running Locally

### Terminal 1: Start Backend
```bash
npm install
npm run dev:server
```

Backend runs on: `http://localhost:5000`

### Terminal 2: Start Frontend
```bash
npm run dev
```

Frontend runs on: `http://localhost:3000`

### Terminal 3 (Optional): MongoDB
```bash
mongod
```

MongoDB runs on: `mongodb://localhost:27017`

## Access Points

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Health Check: http://localhost:5000/health
