/* 
    2) write a program create a new string without the first and last character of a given string
 */

const str = prompt("Enter Some String to Reverse : ").toString().trim();

if (str.length !== 0) {
	console.log(`Inputted String : ${str}`);

	const newStr = str.substring(1, str.length - 1);
	console.log(`New String Without First & Last Characters : ${newStr}`);
} else {
	alert("Please, Enter the Value : ");
}
