const form = document.querySelector("form");
const sName = document.getElementById("name");
const sAge = document.getElementById("age");
const sCourse = document.getElementById("course");
const sCgpa = document.getElementById("cgpa");
const btnDelete = document.getElementById("delete");

function makeConnection() {
	let promise = new Promise((resolve, reject) => {
		const request = indexedDB.open("ERP", 1);

		let db;

		request.onupgradeneeded = function (event) {
			db = event.target.result;

			let store = db.createObjectStore("Students", {
				autoIncrement: true,
			});
		};

		request.onsuccess = function (event) {
			db = event.target.result;
			resolve(db);
		};

		request.onerror = function (event) {
			console.log("Database Error : ", event.target.errorCode);
			reject(event.target.errorCode);
		};
	});

	return promise;
}

function insertRecord(student) {
	let connection = makeConnection();

	connection
		.then((db) => {
			console.log(db);
			const transaction = db.transaction("Students", "readwrite");
			const objStore = transaction.objectStore("Students");
			let query = objStore.put(student);

			query.onsuccess = function (event) {
				console.log("1 : ", event);
			};

			query.onerror = function (event) {
				console.log("0 : ", event.target.errorCode);
			};

			transaction.oncomplete = function () {
				db.close();
			};
		})
		.catch((err) => {
			console.log(err);
		});
}

function getAllRecord() {
	let connection = makeConnection();

	connection
		.then((db) => {
			console.log(db);
			const transaction = db.transaction("Students", "readwrite");
			const objStore = transaction.objectStore("Students");

			objStore.openCursor().onsuccess = (event) => {
				let cursor = event.target.result;
				if (cursor) {
					console.log(cursor.value);
					cursor.continue();
				}
			};

			transaction.oncomplete = function () {
				db.close();
			};
		})
		.catch((err) => {
			console.log(err);
		});
}

function deleteRecord(id) {
	let connection = makeConnection();

	connection
		.then((db) => {
			console.log(db);
			const transaction = db.transaction("Students", "readwrite");
			const objStore = transaction.objectStore("Students");

			let query = objStore.delete(id);

			query.onsuccess = function (event) {
				console.log("1 : ", event);
			};

			query.onerror = function (event) {
				console.log("0 : ", event.target.errorCode);
			};

			transaction.oncomplete = function () {
				db.close();
			};
		})
		.catch((err) => {
			console.log(err);
		});
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const student = {
		name: sName.value,
		age: sAge.value,
		course: sCourse.value,
		cgpa: sCgpa.value,
	};

	insertRecord(student);
	getAllRecord();
});

btnDelete.addEventListener("click", () => {
	const recordId = parseInt(
		prompt("Enter Record Id which you want to DELETE : ")
	);

	deleteRecord(recordId);
	getAllRecord();
});

getAllRecord();
