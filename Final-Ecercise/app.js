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
	let sum = 0;
	ct.forEach((item) => {
		const tr = document.createElement("tr");
		for (const key in item) {
			const td = document.createElement("td");
			td.style.textAlign = "right";
			td.textContent = item[key];
			tr.append(td);
			if (key === "totalValue") {
				sum += item[key];
			}
		}
		table.append(tr);
	});
	const trTotal = document.createElement("tr");
	const tdTotal = document.createElement("td");
	tdTotal.style.textAlign = "right";
	tdTotal.colSpan = 3;
	tdTotal.textContent = `Total : ${sum}`;
	trTotal.append(tdTotal);
	table.append(trTotal);
	console.log(ct);
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
			if (curr.currency === enteredCurrency) {
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
		return a.currency < b.currency;
	});

	generateCurrencyTable(currTbl, currencyTable);
}

function findCurrencyCombination(currencies, rtnAmount) {
	const combinations = [];

	function generateCombinations(
		currentCombination,
		remainingAmount,
		currIndex
	) {
		if (remainingAmount === 0) {
			combinations.push(currentCombination);
			return;
		}

		if (remainingAmount < 0 || currIndex >= currencies.length) {
			return;
		}

		const currentCurr = currencies[currIndex];

		for (let qty = 0; qty <= currentCurr.numOfCurrency; qty++) {
			generateCombinations(
				currentCombination.concat({
					currency: currentCurr.currency,
					numOfCurrency: qty,
					totalValue: currentCurr.currency * qty,
				}),
				remainingAmount - currentCurr.currency * qty,
				currIndex + 1
			);
		}
	}

	generateCombinations([], rtnAmount, 0);

	return combinations;
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

	let rtn = findCurrencyCombination(currencyTable, returnAmount);
	console.log(rtn);

	if (rtn.length > 0) {
		let minCurr = 0;
		let minCurrInd = 0;
		for (let i = 0; i < rtn.length; i++) {
			let sumCurr = rtn[i].reduce((p, c) => {
				return (p += c.numOfCurrency);
			}, 0);

			if (sumCurr < minCurr || i === 0) {
				minCurr = sumCurr;
				minCurrInd = i;
			}
		}

		rtn[minCurrInd].forEach((ele) => {
			if (ele.numOfCurrency > 0) {
				rctbl.push(ele);

				currencyTable.forEach((ec) => {
					if (ec.currency === ele.currency) {
						ec.numOfCurrency -= ele.numOfCurrency;
						ec.totalValue = ec.currency * ec.numOfCurrency;
					}
				});
			}
		});

		generateCurrencyTable(rtnCurrTbl, rctbl);
		generateCurrencyTable(currTbl, currencyTable);
	} else {
		alert("Sorry, We Have Not Enough Changes...");
	}

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
