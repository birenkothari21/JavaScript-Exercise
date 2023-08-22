/* 
    2) generate error in code and catch it and also give alert about it to user
 */

const fetchBtn = document.querySelector("#available-posts button");
const postListElement = document.getElementById("single-post");
const postList = document.querySelector(".posts");

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
					console.log(errMsg);
					throw new Error("Something Went Wrong...!");
				});
			}
		})
		.catch((error) => {
			alert("E-R-R-O-R");
		});
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

postList.addEventListener("click", (event) => {
	const postId = event.target.closest("li").id;

	sendRequest(
		"DELETE",
		`https://jsonplaceholder.typicode.com/post/${postId}` //  this line generates error because of invalid URL...
	);
});
