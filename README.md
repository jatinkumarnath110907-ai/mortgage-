# 🏠 Mortgage Management Platform
A modern mortgage management platform designed to simplify home loans for customers, banks, and administrators.

---

## 🚀 Project Features

### Mortgage Calculator
- Monthly EMI calculation
- Interest rate estimation
- Amortization schedule
- Loan payoff timeline
- Total interest payable analysis

### Loan Comparison
- Compare multiple mortgage plans
- Interest rate comparison
- Monthly payment comparison
- Total loan cost analysis

### Eligibility Checker
- Income-based eligibility checks
- Debt-to-income ratio analysis
- Credit score assessment
- Maximum loan amount estimation

### User Dashboard
- View active loans
- Payment history
- Remaining balance
- Due date reminders
- Download statements

### Document Management
- Upload required documents
- Secure document storage
- Document verification tracking
- Download submitted documents

### Payment Tracking
- EMI payment history
- Upcoming payment reminders
- Missed payment alerts
- Transaction receipts

### AI Mortgage Assistant
- Mortgage-related FAQs
- Loan recommendations
- Financial guidance
- Interest calculations
- Personalized suggestions

### Analytics Dashboard
- Loan approval statistics
- Revenue analytics
- User growth charts
- Payment trend reports
- Mortgage distribution insights

### Authentication
- Secure login and registration
- JWT authentication
- Password reset
- Role-based access control

### Admin Panel
- Manage users
- Approve loans
- Verify documents
- Generate reports
- Manage interest rates
- View analytics

### Responsive Design
- Desktop support
- Tablet support
- Mobile-friendly interface
- Dark mode support

---

# 🛠 Tech Stack

## Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- React Hook Form

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT
- bcrypt

## Email Services
- EmailJS
- Nodemailer

## Charts & Analytics
- Recharts
- Chart.js

## Deployment
- Vercel
- Docker
- GitHub Actions

---

# 📂 Project Structure

```
mortgage-management-platform/

├── app/
├── components/
├── pages/
├── layouts/
├── hooks/
├── services/
├── lib/
├── utils/
├── middleware/
├── context/
├── types/
├── public/
├── assets/
├── styles/
├── data/
├── models/
├── controllers/
├── routes/
├── config/
├── database/
├── tests/
└── README.md
```

---

# ⚙️ Installation

## Clone Repository
```
git clone https://github.com/yourusername/mortgage-management-platform.git
```

## Navigate to Project
```
cd mortgage-management-platform
```

## Install Dependencies
```
npm install
```

## Configure Environment Variables
Create a `.env` file:
```
MONGODB_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASS=
NEXT_PUBLIC_API_URL=
OPENAI_API_KEY=
```

## Start Development Server
```
npm run dev
```

---

# 📡 API Endpoints

## Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
```

## Users
```
GET    /api/users/profile
PUT    /api/users/update
```

## Mortgages
```
GET    /api/mortgages
POST   /api/mortgages/apply
PUT    /api/mortgages/:id
DELETE /api/mortgages/:id
```

## Payments
```
GET    /api/payments
POST   /api/payments/create
```

## Documents
```
POST   /api/documents/upload
GET    /api/documents
DELETE /api/documents/:id
```
