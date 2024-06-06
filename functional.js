function fetchData() {
	fetch("https://api.quotable.io/random")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			console.log(data);
			display(data);
		})
		.catch(function (err) {
			console.log(err);
		});
}
fetchData();

const mainDiv = document.getElementById("main");
const button = document.getElementById("btn");
button.addEventListener("click", fetchData);

setInterval(function () {
	fetchData();
}, 300000);

function display(quote) {
	console.log(quote);
	mainDiv.innerHTML = "";
	const myDiv = document.createElement("div");
	myDiv.classList.add("divc");
	const para = document.createElement("p");
	para.classList.add("parac");
	para.textContent = quote.content;
	const author = document.createElement("h3");
	author.textContent = quote.author;
	myDiv.append(para, author);
	mainDiv.appendChild(myDiv);
}
