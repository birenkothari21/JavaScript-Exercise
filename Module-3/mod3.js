const firstNum = document.getElementById('firstNum');
const secondNum = document.getElementById('secondNum');
const result = document.getElementById('res');

result.addEventListener('click', displayResult);

function displayResult() {
    let n1 = parseInt(firstNum.value);
    let n2 = parseInt(secondNum.value);

    let resAdd = n1 + n2;

    alert(resAdd);
}
