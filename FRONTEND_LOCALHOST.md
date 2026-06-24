# Frontend Localhost Setup Guide

## Overview
This Next.js frontend connects to the Express backend running on `localhost:5000` for local development.

## Configuration

### API Communication
- **Frontend Port**: 3000 (`http://localhost:3000`)
- **Backend API**: `http://localhost:5000/api`
- **API Client**: Axios (configured in `lib/axios.ts`)

### How It Works

1. **next.config.js**: Configures rewrites and headers for API routing
2. **lib/axios.ts**: Axios instance with auto-token injection
3. **services/apiService.ts**: API methods for all endpoints
4. **pages/test-connection.tsx**: Health check page to test frontend-backend connection

## Running Frontend Only

```bash
npm run dev
```

Runs on: `http://localhost:3000`

## Running Frontend + Backend Together

```bash
npm run dev:all
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Testing Connectivity

### 1. Test Page
Open `http://localhost:3000/test-connection` to test:
- Backend health check (`/health`)
- API endpoint connection (`/api/mortgages`)

### 2. Dashboard Page
Open `http://localhost:3000/dashboard` to:
- Fetch mortgages from backend
- Display API connection status

### 3. Manual Test
```bash
curl http://localhost:5000/health
# Expected: { "status": "OK" }
```

## API Integration

### Using API Service
```typescript
import { mortgageService } from '../services/apiService';

const mortgages = await mortgageService.getAll();
const newMortgage = await mortgageService.apply(data);
```

### Using Axios Directly
```typescript
import apiClient from '../lib/axios';

const response = await apiClient.get('/mortgages');
```

## Environment Variables

Configure in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## File Structure

```
lib/
  ├── axios.ts              # API client configuration
hooks/
  ├── useAuth.ts            # Authentication hook with token
services/
  ├── apiService.ts         # All API endpoints
pages/
  ├── test-connection.tsx   # Test page for connectivity
  ├── dashboard.tsx         # Dashboard with API integration
```

## Troubleshooting

### CORS Errors
Ensure `server.ts` has CORS enabled:
```typescript
app.use(cors());
```

### API Not Found
1. Backend running on port 5000? `npm run dev:server`
2. Check API_URL in `.env.local`
3. Verify backend routes in `routes/` folder

### Token Not Sending
Token is automatically added from localStorage. Login to get token:
```typescript
await authService.login(email, password);
// Token stored in localStorage
```

## Next Steps

1. ✅ Frontend running on localhost:3000
2. ✅ Backend running on localhost:5000
3. ✅ API communication configured
4. 🔄 Implement login/authentication flow
5. 🔄 Connect mortgage calculator to backend
6. 🔄 Implement database persistence
