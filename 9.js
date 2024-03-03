/* 9. Check for divisibility.
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. Use a for loop and continue statement.
*/
// Solution:-

function printDivisibleBy3ButNot2(arr) {
  // Loop through each number
  for (let i = 0; i < arr.length; i++) {
    // Check if divisible by 2 (even) using modulo operator
    if (arr[i] % 2 === 0) {
      // Skip even numbers using continue
      continue;
    }

    // Check if divisible by 3
    if (arr[i] % 3 === 0) {
      // Print the number
      console.log(arr[i]);
    }
  }
}

// Example usage
const numbersArray1 = [21,10,15,27,6];
const numbersArray2 = [33,20,10,15,8];
printDivisibleBy3ButNot2(numbersArray1); // Output: 21 15 27 
printDivisibleBy3ButNot2(numbersArray2); // Output: 33 15 

    