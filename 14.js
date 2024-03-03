/* 14. Calculate the final order price

A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item.

*/
// Solution:-

const calculateFinalOrderPrice = (cart) => {
    const totalCost = cart.reduce((accumulator, item) => {
        // For each item, multiply price and quantity and add it to the accumulator
        return accumulator + (item.price * item.quantity);
      }, 0); // Initial accumulator value (starting sum) 
      return totalCost;
}
// Sample user cart with items and their quantities
const userCart =  [
    {price:10,quantity:2},
    {price:10,quantity:2} 
   ]
   const totalOrderPrice = calculateFinalOrderPrice(userCart)
   //printing final total order price
   console.log(totalOrderPrice);
