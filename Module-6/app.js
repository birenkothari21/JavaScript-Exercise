const operation = (resultHandler) => {
    const square = (num) => {
        return num ** 2;
    };

    const num = parseInt(prompt('Enter Number : '));
    const result = square(num);

    resultHandler(num, result);
};

const showResult = (num, result) => {
    alert(`Square of ${num} : ${result}`);
};

operation(showResult);
