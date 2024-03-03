/* 10. Correct a bug

You are working on an e-commerce website where customers can add items to their cart. The cart stores the quantity of each item that the customer wants to purchase in an array of numbers. However, the website is currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart array to correct the bug. 
*/
// Solution:- 

function doubledCardQuantity(cart){
// This function doubles the quantity of each item in a cart array.
    // Create a new array to store the doubled quantities.
    const doubledQuantityCartArray = []
// Loop through each item (quantity) in the original cart.
    cart.forEach(quantity => { 
         // Double the quantity and push it to the new array.
        doubledQuantityCartArray.push(quantity*2);
    }); 
    // Return the new array containing doubled quantities.
return doubledQuantityCartArray; 
}
// Example Usage with sample cart 
let cart1 = [55,55,666,66]
// Call the function with the cart and store the result.
const correctedCart = doubledCardQuantity(cart1)
// Print the corrected cart with a descriptive message.
console.log("Corrected cart with double quantity : ", correctedCart);