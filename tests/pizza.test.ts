import { validatePizza } from '../src/pizza';

describe('validatePizza', () => {
  test('valid pizza passes', () => {
    const result = validatePizza({
      size: 12,
      crust: 'normal',
      toppings: ['cheese', 'pepperoni'],
    });
    expect(result.isPizza).toBe(true);
    if (result.isPizza) {
      expect(result.pizza.isDeepDish).toBe(false);
    }
  });

  test('invalid crust value fails', () => {
    const result = validatePizza({
      size: 12,
      crust: 'thin',
    });
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
      expect(result.errors.join(' ')).toMatch(/crust/i);
    }
  });

  test('banned topping fails', () => {
    const result = validatePizza({
      size: 10,
      crust: 'stuffed',
      toppings: ['cheese', 'glass'],
    });
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
      expect(result.errors.join(' ')).toMatch(/banned/i);
    }
  });
});
