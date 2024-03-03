/* 15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to show customers how much they can save. Given the original price and the discounted price of a product, implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. This function could be useful for the store's marketing team to create promotions and offers that attract customers.
 */
// Solution:- 

const calculateDiscountPercentage = (originalProductPrice,discountedProductPrice) => {
      // Calculate the amount of discount
    const discountAmount =   (originalPrice- discountPrice)
     // Calculate the percentage of discount
    const discountPercentage =   discountAmount/originalPrice * 100 ;
     // Round off the discount percentage to two decimal places
    const roundedDiscount =  discountPercentage.toFixed(2) + "%"
    // return round offf dicount percentage
    return roundedDiscount;

}                                                                                       // Example usage                                                          
const originalPrice = 10000;
const discountPrice = 1500;
// Print the discounted percentage 
console.log(calculateDiscountPercentage(originalPrice,discountPrice));
