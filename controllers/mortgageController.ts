export const calculateMortgage = (principal: number, annualInterest: number, years: number) => {
  const MONTHS_IN_YEAR = 12;
  const PERCENT = 100;
  const monthlyInterest = annualInterest / PERCENT / MONTHS_IN_YEAR;
  const numberOfPayments = years * MONTHS_IN_YEAR;
  const mortgage = principal * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
  return mortgage;
};
