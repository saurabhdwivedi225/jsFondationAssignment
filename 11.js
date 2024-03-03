/* 11. Unit converter
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The function should take input in Celsius and return output in Fahrenheit. This function will help the weather station 
to provide temperature  readings that are easily understandable to a wider audience.
*/
// Solution:-

 function celsiusToFahrenheitConverter(celcius){
// Convert Celsius temperature to Fahrenheit using the formula:
const fahrenheit = (celcius*9/5)+32;
return fahrenheit;
 }
const celcius = 50;
const Fahrenheit = celsiusToFahrenheitConverter(celcius)
console.log(`${celcius}°C  is equal to ${Fahrenheit} °F`);//// Output: 50°C is equal to 122°F
