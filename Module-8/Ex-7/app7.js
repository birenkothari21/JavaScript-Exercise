/* 
    Create a list (and possibly some surrounding logic) where you ensure
    that NO duplicate values can be added. Use whichever approach seems
    appropriate to you.
 */
const arr = [12, 12, 45, 23, 64, 12, 54, 23, 32, 45, 34, 64];

const arr2 = arr.reduce((prev, curr) => {
    if (!prev.includes(curr)) {
        prev.push(curr);
    }
    return prev;
}, []);

const arr3 = arr.filter((ele, index) => arr.indexOf(ele) === index);

console.log(arr);
console.log(arr2);
console.log(arr3);
