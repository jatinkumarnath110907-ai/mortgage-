export interface Mortgage {
  id: string;
  principal: number;
  annualInterest: number;
  years: number;
  monthlyPayment: number;
  status: string;
}

export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface Payment {
  id: string;
  mortgageId: string;
  amount: number;
  date: Date;
  status: 'paid' | 'pending' | 'overdue';
}
