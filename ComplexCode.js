/***************************************
    
    Filename: ComplexCode.js
    
    Description: This code demonstrates a complex algorithm for finding the nth prime number using the Sieve of Eratosthenes.
    
****************************************/

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// Function to find the nth prime number using the Sieve of Eratosthenes algorithm
function findNthPrime(n) {
  const primes = [2];
  let number = 3;

  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number += 2;
  }

  return primes[n - 1];
}

// Main function
function main() {
  const nthPrime = findNthPrime(1000);
  console.log(`The 1000th prime number is: ${nthPrime}`);
}

// Execute main function
main();

/***************************************
    
    Additional Code: 
    
    You may want to modify the `findNthPrime` function to accept user input for the value of n, 
    or implement additional validation and error handling for edge cases.

****************************************/