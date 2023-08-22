/* 
    1) Create a staic JSON and perform crud operations using Http Requests           
 */

const fetchBtn = document.querySelector("#available-posts button");
const postListElement = document.getElementById("single-post");
const postList = document.querySelector(".posts");
const form = document.querySelector("#new-post form");

function sendRequest(method, url, data) {
	return fetch(url, {
		method: method,
		body: data,
	})
		.then((response) => {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				return response.json.then((errMsg) => {
					throw new Error("Something Went Wrong...!");
				});
			}
		})
		.catch((error) => {
			alert("Something Went Wrong...!");
		});
}

function insertPost() {
	const userId = Math.ceil(Math.random() * 100 + 500);
	const formData = new FormData(form);
	formData.append("userId", userId);
	sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", formData);
}

async function fetchPosts() {
	try {
		const posts = await sendRequest(
			"GET",
			"https://jsonplaceholder.typicode.com/posts"
		);

		for (const post of posts) {
			const postTemplate = document.importNode(
				postListElement.content,
				true
			);

			postTemplate.querySelector("h2").textContent = post.title;
			postTemplate.querySelector("p").textContent = post.body;
			postTemplate.querySelector("li").id = post.id;

			postList.append(postTemplate);
		}
	} catch (error) {
		alert(error);
	}
}

fetchBtn.addEventListener("click", fetchPosts);

form.addEventListener("submit", (event) => {
	event.preventDefault();
	insertPost();
});

postList.addEventListener("click", (event) => {
	const postId = event.target.closest("li").id;

	sendRequest(
		"DELETE",
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
});
