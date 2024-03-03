/* 2. Calculator
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement to perform the operation on the two numbers.
The calculator function should:
* Take in two numbers, num1 and num2, and a string representing a mathematical operator
* Use a switch statement to determine which operation to perform based on the value of the operator.
* If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical operation and store the result in a variable called result.
* If the operator is not one of the valid operators, log "Invalid operator" to the console. 
*/
// Solution :- 

function Calculator(num1,num2,operator){
    let result;
    switch(operator){
        case"+":
        result = num1+num2;
        break;
        case"-":
        result = num1 - num2;
        break;
        case"*":
        result = num1*num2;
        break;
        case"/":
        result = num1/num2;
        break;
        default:
            return "Invalid Operator";
    }
 return result;   
}
console.log(Calculator(10,10,"+"));//20
console.log(Calculator(10,5,"-"));//5
console.log(Calculator(100,10,"*"));//1000
console.log(Calculator(0,2,"/"));//0
console.log(Calculator(0,2,"<<"));//Invalid Operator
console.log(Calculator(0,2,"d"));//Invalid Operator