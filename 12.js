/* 12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They require a function that takes in the number of days rented and car type and returns the rental cost. The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are
•  Economy = Rs. 4000 /-per day.
•  Midsize = Rs. 10,000 /-per day.
•  Luxury = Rs. 20,000 /-per day.
*/
// Solution :- 

function rentCalculator(days,carType){
     // Define rental costs per day for each car type
    const rentalcosts = {
        "Economy":4000,
        "Midsize":10000,
        "Luxury":20000  
    }
    if(!Object.keys(rentalcosts).includes(carType)){
        throw new Error("Invalid cartype Please choose from Economy, Midsize , Luxury")
    }
      // Calculate total cost
const totalCost = days*rentalcosts[carType];
return totalCost;  
}
// Example usage:
console.log(rentCalculator(3,"Economy"));//12000
console.log(rentCalculator(8,"Midsize"));//80000
console.log(rentCalculator(5,"Luxury"));//100000
console.log(rentCalculator(5,"debate"));//Error: Invalid cartype. Please choose from Economy, Midsize , Luxury