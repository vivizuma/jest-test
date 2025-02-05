/* A capitalize function that takes a string and returns it with the first character capitalized.
A reverseString function that takes a string and returns it reversed.
A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.
Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
Don’t forget to test punctuation. Punctuation, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);*/

function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
  let rev = "";
  let arr = str.split("");
  for (let i = str.length-1; i>=0; i--) {
    rev += arr[i];
  }
  return rev;

}

function calculator(a, b, operator) {
    switch (operator) {
      case "+": return a + b;
      case "-": return a-b;
      case "*": return a*b;
      case "/": return a/b;
      default: return "Invalid operator";
    }
}
function caesarCipher(str, shift) {
    let result = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = alphabet.indexOf(char);
        let shiftedIndex = (index + shift) % 26;
        result += alphabet[shiftedIndex];
    } 
    return result;
  } 

  function analyseArray(arr) {
    let obj = {}
    // reduce to find sum then divide by length to get the average
    let sorted = arr.sort()
    let len = sorted.length
    let min = sorted[0]
    let max = sorted[len-1]
    let average = arr.reduce((a,b)=> a + b) / len
    return {
      min: min,
      max:max,
      avg: average,
      len:len
    }

  }
  
  console.log(analyseArray([1,3,2,4]))
module.exports = {
  capitalise, 
  reverseString,
  calculator,
  caesarCipher,
  analyseArray
};



