/* 3. Color Mixer

Write a JavaScript program that takes in two strings representing colors and uses a switch statement to determine the resulting color when the two colors are mixed. The program should print the resulting color based on the following criteria:
* If color1 is "red" and color2 is "blue" or vice versa, print "purple".
* If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
* If color1 is "blue" and `color2" is "yellow" or vice versa, print "green".
* If any other combination of colors is input, the program should print "Invalid color combination".

*/
// Solution :-

let color1 = "red";
let color2 = "yellow";
const colorCombinator = (color1,color2) => {
switch(true){
    case(color1 == "red" && color2 == "blue" || color1 ==="blue" && color2 === "red"):
        return "purple";
        case(color1 == "red" && color2 == "yellow" || color1 ==="yellow" && color2 === "red"):
        return "orange";
        case(color1 == "blue" && color2 == "yellow" || color1 ==="yellow" && color2 === "blue"):
        return "green";
        default:
            return "Invalid color combination";
}
}
console.log(colorCombinator(color1,color2)); // orange