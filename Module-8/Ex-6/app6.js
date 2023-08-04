/* 
    Tweak the ""findMax"" function such that it finds both the minimum and
    maximum and returns those as an array. Then use destructuring when
    calling the function to store the two results in separate constants.
 */
function getMaxMin(numbers) {
    const maxNum = numbers.reduce(
        (maxMin, curr) => {
            maxMin[0] = curr > maxMin[0] ? curr : maxMin[0];
            maxMin[1] = curr < maxMin[1] ? curr : maxMin[1];

            return maxMin;
        },
        [0, numbers[0]]
    );
    return maxNum;
}

const arrNum = [10, 20, 3, 5, 8, 450];
const [maxNum, minNum] = getMaxMin(arrNum);

console.log('Given Array : ', arrNum);
console.log(`Max : ${maxNum}, Min : ${minNum}`);
