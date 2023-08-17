/* 
    1) write a program to reverse string of given string ex. "Hello World"
 */

const str = prompt("Enter Some String to Reverse : ").toString();
console.log(`Inputted String : ${str}`);

const reversedStr = str.split("").reverse().join("");
console.log(`Reversed String : ${reversedStr}`);
