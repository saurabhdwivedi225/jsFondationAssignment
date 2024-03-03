/* 8. Inverted right-angled triangle pattern with asterisks

Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks with i rows.
Inverted right-angled pattern:
******
*****
****
***
**
*
if i=6;

*/
let i = 6
let string = ""
for (let a = i;a>0;a--){
  for(j=0;j<a;j++){
    string += "*" 
  }
  string += "\n"
}
console.log(string);
// Output:- 
// ******
// *****
// ****
// ***
// **
// *