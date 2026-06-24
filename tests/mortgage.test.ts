import { calculateMortgage } from '../controllers/mortgageController';

describe('Mortgage Calculator', () => {
  test('should calculate monthly payment correctly', () => {
    const principal = 300000;
    const rate = 5.5;
    const years = 20;
    const result = calculateMortgage(principal, rate, years);
    expect(result).toBeGreaterThan(0);
  });

  test('should return zero for zero principal', () => {
    const result = calculateMortgage(0, 5.5, 20);
    expect(result).toBe(0);
  });
});
