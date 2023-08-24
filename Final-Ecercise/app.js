const currency = document.getElementById("currency");
const numOfCurrency = document.getElementById("numOfCurrency");
const addCurrencyForm = document.getElementById("addCurrencyForm");

const givenAmount = document.getElementById("givenAmount");
const actualAmount = document.getElementById("actualAmount");
const calcChangeForm = document.getElementById("calcChangeForm");

const currTbl = document.querySelector("#currencyTable #currTbl tbody");
const rtnCurrTbl = document.querySelector("#rtnCurrTable #currTbl tbody");
const currencyTable = [];

function generateCurrencyTable(table, ct) {
	table.textContent = "";
	ct.forEach((item) => {
		const tr = document.createElement("tr");
		for (const key in item) {
			const td = document.createElement("td");
			td.textContent = item[key];
			tr.append(td);
		}
		table.append(tr);
	});
}

function validateInput(input) {
	if (isNaN(input) || input <= 0) {
		return false;
	}
	return true;
}

function addCurrencyHandler() {
	const enteredCurrency = parseInt(currency.value);
	const enteredNumOfCurrency = parseInt(numOfCurrency.value);

	if (
		!validateInput(enteredCurrency) ||
		!validateInput(enteredNumOfCurrency)
	) {
		alert("Pleas, Enter Valid Currency...");
		return;
	}

	if (currencyTable.length === 0) {
		const newCurrency = {
			currency: enteredCurrency,
			numOfCurrency: enteredNumOfCurrency,
			totalValue: enteredCurrency * enteredNumOfCurrency,
		};

		currencyTable.push(newCurrency);
	} else {
		let flag = false;
		for (const curr of currencyTable) {
			if (
				curr.hasOwnProperty("currency") &&
				curr.currency === enteredCurrency
			) {
				curr.numOfCurrency += enteredNumOfCurrency;
				curr.totalValue += enteredCurrency * enteredNumOfCurrency;
				flag = true;
				break;
			}
		}

		if (!flag) {
			const newCurrency = {
				currency: enteredCurrency,
				numOfCurrency: enteredNumOfCurrency,
				totalValue: enteredCurrency * enteredNumOfCurrency,
			};

			currencyTable.push(newCurrency);
		}
	}

	currencyTable.sort((a, b) => {
		if (a.currency > b.currency) {
			return -1;
		} else if (a.currency < b.currency) {
			return 1;
		} else {
			return 0;
		}
	});

	generateCurrencyTable(currTbl, currencyTable);
}

function calcChangeHandler() {
	const enteredGivenAmount = parseInt(givenAmount.value);
	const enteredActualAmount = parseInt(actualAmount.value);

	let returnAmount = enteredGivenAmount - enteredActualAmount;
	let rctbl = [];

	if (
		!validateInput(enteredGivenAmount) ||
		!validateInput(enteredActualAmount)
	) {
		alert("Pleas, Enter Valid Currency...");
		return;
	}

	let ctClone = structuredClone(currencyTable);

	ctClone.forEach((element) => {
		if (returnAmount >= element.currency) {
			let counter = 0;
			do {
				returnAmount -= element.currency;
				element.numOfCurrency--;
				element.totalValue -= element.currency;
				counter++;
			} while (
				returnAmount >= element.currency &&
				element.numOfCurrency >= 0
			);
			const newRC = {
				currency: element.currency,
				numOfCurrency: counter,
				totalValue: element.currency * counter,
			};

			console.log("Rtn_AMNT : ", returnAmount);
			rctbl.push(newRC);
		}
	});

	generateCurrencyTable(rtnCurrTbl, rctbl);

	if (returnAmount === 0) {
		alert("Please, take your change...");
	} else {
		alert("Sorry, we haven't enough changes");
	}

	console.log(rctbl);
	console.log(ctClone);
}

addCurrencyForm.addEventListener("submit", (event) => {
	event.preventDefault();
	addCurrencyHandler();
});

calcChangeForm.addEventListener("submit", (event) => {
	event.preventDefault();
	calcChangeHandler();
});
