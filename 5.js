/* 5. Capitalize
You are building a form where users can enter their names. You want to make sure that the first letter of the name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and returns the modified string. Otherwise, it returns the original string without any changes.
*/
// Solution :-

function capitalizedName(name){
    // Extract the first letter of the name
   const firstLetter = name.charAt(0)
  // If it is, capitalize the first letter and convert the rest of the string to lowercase
    // Otherwise, return the name without any changes 
  return firstLetter === firstLetter.toLowerCase()?firstLetter.toUpperCase()+ name.slice(1).toLowerCase() :name;
}
// Example UserName 
let inputedName1 = "Vishu"
let inputedName2 = "vIshu"
let inputedName3 = "visHU"
console.log(capitalizedName(inputedName1));//Vishu
console.log(capitalizedName(inputedName3));//Vishu
console.log(capitalizedName(inputedName2));//Vishu



