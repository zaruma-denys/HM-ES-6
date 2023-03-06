const arr7 = [1, -2, 3, 0, 4, -5, 6, -11];

const positiveNumbers = arr7.filter(num => num > 0);
console.log(positiveNumbers);
const squareRoots = positiveNumbers.map(num => Math.sqrt(num));
console.log(squareRoots);