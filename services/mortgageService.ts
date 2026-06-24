import { calculateMortgage } from '../controllers/mortgageController';

export const getMortgageSummary = (principal: number, annualInterest: number, years: number) => {
  const monthlyPayment = calculateMortgage(principal, annualInterest, years);
  return { principal, annualInterest, years, monthlyPayment };
};
