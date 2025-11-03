import { validatePizza } from '../src/pizza';

describe('validatePizza', () => {
  describe('valid pizzas', () => {
    test('valid pizza with all fields passes', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        isDeepDish: false,
        toppings: ['cheese', 'pepperoni'],
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.size).toBe(12);
        expect(result.pizza.crust).toBe('normal');
        expect(result.pizza.isDeepDish).toBe(false);
        expect(result.pizza.toppings).toEqual(['cheese', 'pepperoni']);
      }
    });

    test('valid pizza with minimal required fields passes', () => {
      const result = validatePizza({
        size: 10,
        crust: 'stuffed',
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.size).toBe(10);
        expect(result.pizza.crust).toBe('stuffed');
        expect(result.pizza.isDeepDish).toBe(false);
        expect(result.pizza.toppings).toEqual([]);
      }
    });

    test('valid pizza with stuffed crust passes', () => {
      const result = validatePizza({
        size: 14,
        crust: 'stuffed',
        toppings: ['cheese'],
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.crust).toBe('stuffed');
      }
    });

    test('valid pizza with isDeepDish true passes', () => {
      const result = validatePizza({
        size: 16,
        crust: 'normal',
        isDeepDish: true,
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.isDeepDish).toBe(true);
      }
    });

    test('valid pizza with empty toppings array passes', () => {
      const result = validatePizza({
        size: 8,
        crust: 'normal',
        toppings: [],
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.toppings).toEqual([]);
      }
    });

    test('valid pizza with multiple toppings passes', () => {
      const result = validatePizza({
        size: 18,
        crust: 'normal',
        toppings: ['cheese', 'pepperoni', 'mushrooms', 'onions', 'peppers'],
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.toppings.length).toBe(5);
      }
    });

    test('valid pizza with minimum size passes', () => {
      const result = validatePizza({
        size: 1,
        crust: 'normal',
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.size).toBe(1);
      }
    });

    test('valid pizza with large size passes', () => {
      const result = validatePizza({
        size: 100,
        crust: 'stuffed',
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.size).toBe(100);
      }
    });
  });

  describe('invalid size values', () => {
    test('negative size fails', () => {
      const result = validatePizza({
        size: -5,
        crust: 'normal',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/size/i);
      }
    });

    test('zero size fails', () => {
      const result = validatePizza({
        size: 0,
        crust: 'normal',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/size/i);
      }
    });

    test('non-integer size fails', () => {
      const result = validatePizza({
        size: 12.5,
        crust: 'normal',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/size/i);
      }
    });

    test('missing size fails', () => {
      const result = validatePizza({
        crust: 'normal',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/size/i);
      }
    });

    test('size as string fails', () => {
      const result = validatePizza({
        size: '12',
        crust: 'normal',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/size/i);
      }
    });

    test('size as null fails', () => {
      const result = validatePizza({
        size: null,
        crust: 'normal',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/size/i);
      }
    });
  });

  describe('invalid crust values', () => {
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

    test('crust as empty string fails', () => {
      const result = validatePizza({
        size: 12,
        crust: '',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/crust/i);
      }
    });

    test('missing crust fails', () => {
      const result = validatePizza({
        size: 12,
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/crust/i);
      }
    });

    test('crust as number fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 123,
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/crust/i);
      }
    });

    test('crust as null fails', () => {
      const result = validatePizza({
        size: 12,
        crust: null,
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/crust/i);
      }
    });
  });

  describe('banned toppings', () => {
    test('banned topping glass fails', () => {
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

    test('banned topping soap fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: ['soap', 'pepperoni'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });

    test('banned topping battery fails', () => {
      const result = validatePizza({
        size: 14,
        crust: 'stuffed',
        toppings: ['battery'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });

    test('banned topping nail fails', () => {
      const result = validatePizza({
        size: 16,
        crust: 'normal',
        toppings: ['cheese', 'nail'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });

    test('banned topping case-insensitive fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: ['GLASS', 'cheese'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });

    test('banned topping mixed case fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: ['SoAp', 'cheese'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });

    test('multiple banned toppings fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: ['glass', 'battery', 'soap'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });
  });

  describe('invalid data types', () => {
    test('null input fails', () => {
      const result = validatePizza(null);
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });

    test('undefined input fails', () => {
      const result = validatePizza(undefined);
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });

    test('string input fails', () => {
      const result = validatePizza('not a pizza');
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });

    test('number input fails', () => {
      const result = validatePizza(123);
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });

    test('array input fails', () => {
      const result = validatePizza([1, 2, 3]);
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });

    test('empty object fails', () => {
      const result = validatePizza({});
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(0);
      }
    });
  });

  describe('invalid optional fields', () => {
    test('isDeepDish as string fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        isDeepDish: 'true',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/isDeepDish/i);
      }
    });

    test('isDeepDish as number fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        isDeepDish: 1,
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/isDeepDish/i);
      }
    });

    test('toppings as string fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: 'cheese',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/toppings/i);
      }
    });

    test('toppings as object fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: { cheese: true },
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/toppings/i);
      }
    });

    test('toppings with non-string elements fails', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: ['cheese', 123, null],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/toppings/i);
      }
    });
  });

  describe('multiple validation errors', () => {
    test('multiple invalid fields return multiple errors', () => {
      const result = validatePizza({
        size: 12,
        crust: 'invalid',
        toppings: ['glass'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThanOrEqual(1);
        const errorString = result.errors.join(' ');
        expect(errorString).toMatch(/crust/i);
      }
    });

    test('invalid size and crust return multiple errors', () => {
      const result = validatePizza({
        size: -5,
        crust: 'invalid',
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(1);
        const errorString = result.errors.join(' ');
        expect(errorString).toMatch(/size/i);
        expect(errorString).toMatch(/crust/i);
      }
    });

    test('valid size and crust but banned topping returns banned error', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: ['glass'],
      });
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.join(' ')).toMatch(/banned/i);
      }
    });

    test('missing required fields return multiple errors', () => {
      const result = validatePizza({});
      expect(result.isPizza).toBe(false);
      if (!result.isPizza) {
        expect(result.errors.length).toBeGreaterThan(1);
      }
    });
  });

  describe('edge cases', () => {
    test('pizza with undefined toppings uses default', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        toppings: undefined,
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.toppings).toEqual([]);
      }
    });

    test('pizza with undefined isDeepDish uses default', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        isDeepDish: undefined,
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.isDeepDish).toBe(false);
      }
    });

    test('extra properties are ignored', () => {
      const result = validatePizza({
        size: 12,
        crust: 'normal',
        extraField: 'should be ignored',
        anotherField: 123,
      });
      expect(result.isPizza).toBe(true);
      if (result.isPizza) {
        expect(result.pizza.size).toBe(12);
        expect(result.pizza.crust).toBe('normal');
      }
    });
  });
});
