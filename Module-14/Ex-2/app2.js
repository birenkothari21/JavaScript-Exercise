/* 
    2) How to run a function when the page is loaded in JavaScript
 */

const body = document.querySelector("body");

function greet() {
	alert("Hello, This alert will display when page is loaded!");
}

body.addEventListener("load", greet());
