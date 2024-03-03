/*1. Password Validator

Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.*/

// Solution:- 
function passwordValidator(userPassword,confirmedUserPassword){
    if (userPassword === confirmedUserPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful"); 
    }
}
passwordValidator("00000","00000");//Password Matched. Password validation Successful.
passwordValidator("#Raghu000#","#Raghuveer123#");//Password didn't match. Password validation unsuccessful
