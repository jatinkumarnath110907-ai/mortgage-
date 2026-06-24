import { useEffect, useState } from 'react';

export const useMortgage = (principal: number, rate: number, years: number) => {
  const [monthly, setMonthly] = useState(0);

  useEffect(() => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    setMonthly(payment);
  }, [principal, rate, years]);

  return { monthly };
};
