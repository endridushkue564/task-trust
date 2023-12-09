// Title: Complex Calculator
// Filename: complex_calculator.js

// This code demonstrates a complex calculator with various mathematical operations
// including factorials, Fibonacci sequence, quadratic equation, and more.

// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to generate Fibonacci sequence up to a given number of terms
function fibonacci(n) {
  var sequence = [];
  if (n === 1) {
    sequence.push(0);
  } else if (n === 2) {
    sequence.push(0, 1);
  } else {
    sequence.push(0, 1);
    for (var i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

// Function to solve quadratic equation given coefficients
function solveQuadraticEquation(a, b, c) {
  var discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    var x = -b / (2 * a);
    return [x];
  } else {
    return [];
  }
}

// Function to calculate the sum of digits of a number
function sumOfDigits(n) {
  var sum = 0;
  var numStr = n.toString();
  for (var i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}

// Function to generate prime numbers up to a given limit
function generatePrimes(limit) {
  var primes = [];
  for (var i = 2; i <= limit; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

// Usage and testing examples

console.log(factorial(5)); // Output: 120

console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

console.log(solveQuadraticEquation(1, -4, 4)); // Output: [2]

console.log(sumOfDigits(12345)); // Output: 15

console.log(generatePrimes(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
