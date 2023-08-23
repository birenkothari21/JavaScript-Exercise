const currency = document.getElementById("currency");
const numOfCurrency = document.getElementById("numOfCurrency");
const addCurrencyForm = document.getElementById("addCurrencyForm");

const givenAmount = document.getElementById("givenAmount");
const actualAmount = document.getElementById("actualAmount");
const calcChangeForm = document.getElementById("calcChangeForm");

const currTbl = document.querySelector("#currTbl tbody");
const currencyTable = [];

function generateCurrencyTable(ct) {
	currTbl.textContent = "";
	ct.forEach((item) => {
		const tr = document.createElement("tr");
		for (const key in item) {
			const td = document.createElement("td");
			td.textContent = item[key];
			tr.append(td);
		}
		currTbl.append(tr);
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

	generateCurrencyTable(currencyTable);
}

function calcChangeHandler() {
	const enteredGivenAmount = parseInt(givenAmount.value);
	const enteredActualAmount = parseInt(actualAmount.value);

	if (
		!validateInput(enteredGivenAmount) ||
		!validateInput(enteredActualAmount)
	) {
		alert("Pleas, Enter Valid Currency...");
		return;
	}
}

addCurrencyForm.addEventListener("submit", (event) => {
	event.preventDefault();
	addCurrencyHandler();
});

calcChangeForm.addEventListener("submit", (event) => {
	event.preventDefault();
	calcChangeHandler();
});
