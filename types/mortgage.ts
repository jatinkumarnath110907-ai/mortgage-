export interface Mortgage {
  id: string;
  principal: number;
  annualInterest: number;
  years: number;
  monthlyPayment: number;
  status: 'active' | 'completed' | 'pending';
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  mortgageId: string;
  amount: number;
  date: Date;
  status: 'paid' | 'pending' | 'overdue';
}

export interface Eligibility {
  income: number;
  debtToIncomeRatio: number;
  creditScore: number;
  maxLoanAmount: number;
  isEligible: boolean;
}

export interface Document {
  id: string;
  userId: string;
  name: string;
  type: string;
  url: string;
  status: 'pending' | 'verified' | 'rejected';
  uploadedAt: Date;
}
