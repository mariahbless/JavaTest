         // CODING QUESTIONS 1 TO 4 SECTION C

//1. Write a function to reverse a given string
function stringReversing(str) {
    return str.split('').reverse().join('');
}
const inputString = "Javascripttest";
const reversedString = stringReversing(inputString);
console.log(reversedString);  // Output: "olleh"



// 2. Implement a function to find the sum of all even numbers in an array.
function sumOfEven(arr) {
    return arr.filter(num => num % 2 === 0) // Filter even numbers
              .reduce((sum, num) => sum + num, 0); // Suming them  up
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = sumOfEven(numbers);
console.log(sum);



// 3. Create a function that takes two numbers. If the numbers are the same, return
//their product. If they are different, return their sum.
function CalculatingTwoNumbers(num1, num2) {
    if (num1 === num2) {
        return num1 * num2; // Return product if numbers are the same
    } else {
        return num1 + num2; // Return sum if numbers are different
    }
}

console.log(CalculatingTwoNumbers(5, 5));
console.log(CalculatingTwoNumbers(6, 7)); 



// 4. Write a function that checks if a given word is a palindrome.
function ifNumIsPalindrome(word) {
    // Convert the word to lowercase and remove non-alphanumeric characters
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the cleaned word with its reverse
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));    
console.log(isPalindrome("A man, a plan, a canal, Panama"));  
