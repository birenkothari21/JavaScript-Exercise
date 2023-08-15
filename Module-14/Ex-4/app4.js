/* 
    4) Press and hold down a key inside the text field to set a red background color. Release the key to set a green background color
 */

const textField = document.getElementById("textField");

function setBgRed() {
	console.log("RED");
	textField.style.backgroundColor = "red";
}

function setBgGreen() {
	console.log("GREEN");
	textField.style.backgroundColor = "green";
}

textField.addEventListener("keydown", setBgRed);
textField.addEventListener("keyup", setBgGreen);
