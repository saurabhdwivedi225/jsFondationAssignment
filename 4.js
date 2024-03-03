/* 4. Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters the marks of all five students in an array called "marks". Write a program that iterates through the array and finds the highest marks scored by any student in the class. The highest marks must then be displayed to the 
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks. 
*/
// Solution:- 

const marks = [45,78,89,55,66];
let highestMark = marks[0];
for (const mark of marks.slice(1)) {
   highestMark = mark>highestMark?mark:highestMark; 
}
console.log(highestMark);
