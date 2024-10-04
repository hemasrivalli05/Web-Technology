const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 1: Filter even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

// Step 2: Map to square each number
const squaredEvenNumbers = evenNumbers.map(number => number ** 2);

// Step 3: Reduce to sum the squared numbers
const sumOfSquares = numbers.reduce((acc, number) => acc + number, 0);

console.log('Even Numbers:', evenNumbers);
console.log('Squared Even Numbers:', squaredEvenNumbers);
console.log('Sum of Squared Even Numbers:', sumOfSquares);