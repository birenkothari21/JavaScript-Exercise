/* 
    1) store a data of user in browser storage with every possible way    
 */

const btnLS = document.getElementById("btnLS");
const btnGetLS = document.getElementById("btnGetLS");
const btnSS = document.getElementById("btnSS");
const btnGetSS = document.getElementById("btnGetSS");
const btnCS = document.getElementById("btnCS");
const btnGetCS = document.getElementById("btnGetCS");

const userData = {
	name: "Biren Kothari",
	age: 23,
	address: {
		city: "Visavadar",
		district: "Junagadh",
		state: "Gujarat",
		country: "india",
	},
	hobbie: ["Travelling", "Reading"],
	userId: "bnk2161",
	password: "bnk2!@6!",
};

// Local-Storage & Session-Storage

btnLS.addEventListener("click", () => {
	// Store Value in Local-Storage...

	localStorage.setItem("userName", userData.name);
	localStorage.setItem("userAge", userData.age);
	localStorage.setItem("userHobbie", userData.hobbie);
	localStorage.setItem("userAddress", JSON.stringify(userData.address));
});

btnGetLS.addEventListener("click", () => {
	// Getting Value from Local-Storage...

	const userName = localStorage.getItem("userName");
	const userAge = localStorage.getItem("userAge");
	const userHobbie = localStorage.getItem("userHobbie");
	const userAddress = localStorage.getItem("userAddress");

	console.log(`UserName Stored in localStorage : ${userName}`);
	console.log(`UserAge Stored in localStorage : ${userAge}`);
	console.log(`UserHobbie Stored in localStorage : ${userHobbie}`);
	console.log(`UserAddress Stored in localStorage : ${userAddress}`);
});

btnSS.addEventListener("click", () => {
	// Store Value in Session-Storage...

	sessionStorage.setItem("userName", userData.name);
	sessionStorage.setItem("userAge", userData.age);
	sessionStorage.setItem("userHobbie", userData.hobbie);
	sessionStorage.setItem("userAddress", JSON.stringify(userData.address));
});

btnGetSS.addEventListener("click", () => {
	// Getting Value from Session-Storage...

	const userName = sessionStorage.getItem("userName");
	const userAge = sessionStorage.getItem("userAge");
	const userHobbie = sessionStorage.getItem("userHobbie");
	const userAddress = sessionStorage.getItem("userAddress");

	console.log(`UserName Stored in sessionStorage : ${userName}`);
	console.log(`UserAge Stored in sessionStorage : ${userAge}`);
	console.log(`UserHobbie Stored in sessionStorage : ${userHobbie}`);
	console.log(`UserAddress Stored in sessionStorage : ${userAddress}`);
});

btnCS.addEventListener("click", () => {
	// Store Value in Cookie-Storage...

	document.cookie = `userName=${userData.name}; SameSite=None; Secure`;
	document.cookie = `userAge=${userData.age}; SameSite=None; Secure`;
	document.cookie = `userHobbie=${userData.hobbie}; SameSite=None; Secure`;
	document.cookie = `userAddress=${JSON.stringify(
		userData.address
	)}; SameSite=None; Secure`;
});

btnGetCS.addEventListener("click", () => {
	// Getting Value from Cookie-Storage...

	let cookieData = document.cookie.split(";").map((i) => i.trim().split("="));

	for (const i of cookieData) {
		console.log(i);
	}
});
