/* 7. Remove Duplicates

In an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order.
To solve this problem, the application needs to remove duplicate items from the customer's cart. The program should take the customer's cart with duplicates as input, and return a new cart without duplicates.
Write a program to solve the problem of duplicate items in the cart by removing duplicates.

*/
// Solution :- 
 function removeDuplicates(cart){
 // Filter the array, keeping only elements where their index in the array
  // is equal to their first occurrence (i.e., their index is the same as their
  // indexOf value). This ensures that only unique items are included.
  const removeDuplicatesItems =  cart.filter((item, index) => cart.indexOf(item) === index);
  return removeDuplicatesItems;
 }
 // Example usage:
 const duplicateCart1 = ["Shoes","Shirt","Paint","Shoes","Shirt","Watch"];
 const duplicateCart2 = [55,44,66,44,77,77]; 
 const uniqueCart1 = removeDuplicates(duplicateCart1);
 const uniqueCart2 = removeDuplicates(duplicateCart2);
console.log(uniqueCart1);
console.log(uniqueCart2);

// We can also achieve this goal by using Set 


