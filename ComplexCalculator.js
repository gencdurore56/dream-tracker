/* 
* Filename: ComplexCalculator.js
* Description: A complex calculator that performs various mathematical operations
*/

// Class to perform mathematical operations
class Calculator {
  // Addition operation
  static add(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  // Subtraction operation
  static subtract(...numbers) {
    return numbers.reduce((acc, curr) => acc - curr);
  }

  // Multiplication operation
  static multiply(...numbers) {
    return numbers.reduce((acc, curr) => acc * curr);
  }

  // Division operation
  static divide(dividend, divisor) {
    if (divisor === 0) throw new Error("Cannot divide by zero");
    return dividend / divisor;
  }

  // Exponentiation operation
  static power(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Square root operation
  static sqrt(number) {
    return Math.sqrt(number);
  }

  // Absolute value operation
  static abs(number) {
    return Math.abs(number);
  }

  // Logarithm operation
  static log(number) {
    if (number <= 0) throw new Error("Invalid input for logarithm");
    return Math.log(number);
  }

  // Trigonometric sine operation
  static sin(angle) {
    return Math.sin(angle);
  }

  // Trigonometric cosine operation
  static cos(angle) {
    return Math.cos(angle);
  }

  // Trigonometric tangent operation
  static tan(angle) {
    return Math.tan(angle);
  }

  // Trigonometric inverse sine operation
  static asin(value) {
    return Math.asin(value);
  }

  // Trigonometric inverse cosine operation
  static acos(value) {
    return Math.acos(value);
  }

  // Trigonometric inverse tangent operation
  static atan(value) {
    return Math.atan(value);
  }
}

// Usage examples
console.log("Calculator.add(2, 4, 6, 8):", Calculator.add(2, 4, 6, 8));
console.log("Calculator.subtract(10, 2, 3):", Calculator.subtract(10, 2, 3));
console.log("Calculator.multiply(2, 5, 3):", Calculator.multiply(2, 5, 3));
console.log("Calculator.divide(50, 5):", Calculator.divide(50, 5));
console.log("Calculator.power(3, 4):", Calculator.power(3, 4));
console.log("Calculator.sqrt(25):", Calculator.sqrt(25));
console.log("Calculator.abs(-7):", Calculator.abs(-7));
console.log("Calculator.log(10):", Calculator.log(10));
console.log("Calculator.sin(0.5):", Calculator.sin(0.5));
console.log("Calculator.cos(0.5):", Calculator.cos(0.5));
console.log("Calculator.tan(0.5):", Calculator.tan(0.5));
console.log("Calculator.asin(0.5):", Calculator.asin(0.5));
console.log("Calculator.acos(0.5):", Calculator.acos(0.5));
console.log("Calculator.atan(0.5):", Calculator.atan(0.5));

// ... More complex calculations and operations involving the Calculator class

// ...

// End of code