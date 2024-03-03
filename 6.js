/* 6. Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted. */

// Solution:-

function vowelCounter(name) {
    let count = 0;
    let lowercase = name.toLowerCase()
for (const char of lowercase) {
    if (char === 'a' || 
        char === "e" ||
        char === "i" || 
        char === "o" || 
        char === "u") {
        count++;
    }
}
return count;
}
let name1 = "dhruv";
let output = vowelCounter(name1);
console.log(`The name ${name1} has ${output} vowel `);
