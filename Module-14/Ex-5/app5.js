/* 
    5) when a user selects dropdown value. ex. dropdown value like Java,PHP,Angular when select java then alert message like ""select language is java""
 */

const languages = document.getElementById("languages");

function showSelectedLanguage() {
	alert(`Selected Language is ${languages.value} `);
}

languages.addEventListener("change", showSelectedLanguage);
