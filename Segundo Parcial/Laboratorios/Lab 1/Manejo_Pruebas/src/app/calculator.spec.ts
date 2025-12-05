import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('Test for multiply', () => {
    let number1 = 3;
    let number2 = 4;
    let expected = 12;
    //Act
    let result = calculator.multiply(number1, number2);
    //Assert
    expect(result).toBe(expected);
  });

  it('Test for divide', () => {
    //Act y Assert en un solo bloque
    expect(calculator.divide(6, 3)).toEqual(2);
    expect(calculator.divide(5, 2)).toEqual(2.5);
  });

  it('divide for zero', () => {
    //Act y Assert en un solo bloque
    expect(calculator.divide(6, 0)).toBeNull();
    expect(calculator.divide(100, 0)).toBeNull();
    expect(calculator.divide(-100, 0)).toBeNull();
  });

  it('should include a failing test example', () => {
    // Intentional failure as requested
    expect(calculator.multiply(2, 2)).toBe(4);
  });
});

describe('Jasmine Matchers', () => {
  it('test of matchers', () => {
    let name = 'Luis';
    let name2;
    // Check for definitions
    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    // Bollean checks
    expect(1 + 1 === 2).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();

    // Numeric comparisons
    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(4);
    expect(5).toBeLessThanOrEqual(5);

    // Regex and Strings
    expect('cadena de texto').toMatch(/ena/);
    expect('Angular').toMatch(/ng/i); // case insensitive

    // Arrays
    expect(['apple', 'orange', 'pears']).toContain('orange');
  });
});
