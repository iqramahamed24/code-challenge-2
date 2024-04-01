//A function that takes an array of numbers as input and returns
//a new array containing only prime numbers.

//Set an array of numbers
const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

//Call a function generatePrime and give it a parameter
function generatePrime(number) {
  // Determine if 3 and anything less than 3 can be a prime number
  if (number <= 3) return true;
  //Define if number can be divided by 3 and 2
  if (number % 2 === 0 || number % 3 === 0) return false;
  //Use initialization and determine if 5 or anything less is a prime number
  for (let i = 5; i * i <= number; ) {
    if (number % i === 0) return false;
  }
  return true; // Use return to determine all the prime numbers
}
// Call a filter prime function to filter the prime numbers from the array
function filterPrime(nums) {
  // Use the filter method to return an array of only prime numbers
  return nums.filter((num) => generatePrime(num));
}
// Set a new const to only get an ouput of prime numbers from the array.
const prime = filterPrime(myArray);
