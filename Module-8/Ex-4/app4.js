// Create an array of numbers (of your choice) and perform three array
// operations on it: filter for numbers greater than 5, map every number to
// an object which holds the number on some property (e.g. ""num"") and
// reduce the array to a single number (the multiplication of all numbers).

// filter grater than 5...
const ar1 = [10, 20, 3, 45, 2, 4, 50];
const ar2 = ar1.filter((el) => el > 5);
console.log('Array Before Filter : ', ar1);
console.log('Array After Filter : ', ar2);

// Multiplication of Array Elements...
const arr = [10, 20, 3, 45, 2, 4, 50];
const product = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev * curr;
}, 1);
console.log(`Multiplication of all elements of ${arr} is : ${product}`);
