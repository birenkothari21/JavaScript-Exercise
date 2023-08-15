/* 
    3) When you leave the input field, a function is triggered which transforms the input text to upper case. Ex. like enter user hello change the tab output shuld be ""HELLO""
 */

const textField = document.querySelector("input");

function transformTextCase() {
	textField.value = textField.value.toUpperCase();
}

textField.addEventListener("blur", transformTextCase);
