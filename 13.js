/* 13. Bill splitter

A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group. 

*/
// Solution :- 

function billSplitter(costOfEachDish,numberOfPeopleSharing){
     // Calculate the total bill by adding up the costs of each dish
   const totalbill =Object.values(costOfEachDish).reduce((accumalator,item)=> accumalator + item, 0);
   // Calculate the bill amount each person needs to pay
       const billPaidToEachPerson = totalbill/numberOfPeopleSharing ;
        // Return an object containing the total bill and individual share
    return {
        totalbill,
        billPaidToEachPerson
    }
}
// Define the cost of each dish in an object
const costOfEachDish = {
    "Pizza":99,
    "Sandwich":100,
    "tea" : 50,
    "Coffee" : 80
}
const numberOfPeopleSharing = 4;
// print the results
console.log(billSplitter(costOfEachDish,4));