// Write a function (""findMax"") which executes some logic that finds the
// largest number in a list of arguments. Pass the array from task 1 split
// up into multiple arguments to that function.

function getMaxNum(numbers) {
    const maxNum = numbers.reduce((max, curr) => {
        if (curr > max) {
            max = curr;
            return max;
        } else {
            return max;
        }
    }, 0);
    return maxNum;
}

const arrNum = [1, 20, 3, 5, 8, 450];
console.log('Given Array : ', arrNum);
console.log('Maximum Number From Given Array : ', getMaxNum(arrNum));
