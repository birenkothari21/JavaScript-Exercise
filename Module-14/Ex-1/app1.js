/* 
    1) write a program to calculate add,sub,div,mul of two input from users.
 */

const btnAdd = document.getElementById("btnAdd");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

const ADD = "ADD";
const SUB = "SUB";
const MUL = "MUL";
const DIV = "DIV";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(calcType) {
	let n1 = parseInt(num1.value);
	let n2 = parseInt(num2.value);
	let res = 0;
	let calcNotation = "";

	switch (calcType) {
		case ADD:
			res = n1 + n2;
			calcNotation = "+";
			break;

		case SUB:
			res = n1 - n2;
			calcNotation = "-";
			break;

		case MUL:
			res = n1 * n2;
			calcNotation = "*";
			break;

		case DIV:
			res = n1 / n2;
			calcNotation = "/";
			break;

		default:
			res = 0;
			break;
	}

	result.textContent = `${n1} ${calcNotation} ${n2} : ${res}`;
}

function addEventHandler() {
	calculate(ADD);
}

function subEventHandler() {
	calculate(SUB);
}

function mulEventHandler() {
	calculate(MUL);
}

function divEventHandler() {
	calculate(DIV);
}

btnAdd.addEventListener("click", addEventHandler);
btnSub.addEventListener("click", subEventHandler);
btnMul.addEventListener("click", mulEventHandler);
btnDiv.addEventListener("click", divEventHandler);
