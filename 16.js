/* 16. Generate a random number

Create a JavaScript program that generates a random number between 1 and 100 when the program starts. Use a self-invoking arrow function to generate the random number. This program can be used as a component in various games or applications that require a random number generator.

*/

// Solution:- 

(()  => {
const randomNumber = Math.floor(Math.random()*100)+1
console.log("Random Number is: ",randomNumber);
})();

/* Random number generation: Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). Multiplying it by 100 scales it to 0-99 (non-inclusive), and adding 1 shifts the range to 1-100 (inclusive). Math.floor() rounds down to the nearest integer. */