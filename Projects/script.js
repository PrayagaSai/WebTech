const mainDiv = document.getElementById("main");
function Ramu() {
	fetch("https://fakestoreapi.com/products")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			console.log(data);
			displayData(data);
		})
		.catch(function (err) {
			console.log(err);
		});
}
Ramu();
function displayData(arr) {
	console.log(arr);
	arr.forEach(function (p) {
		const div = document.createElement("div");
		div.classList.add("myProduct");
		const image = document.createElement("img");
		image.src = p.image;
		image.alt = p.title;
		const title = document.createElement("h2");
		title.textContent = p.title;
		const price = document.createElement("p");
		price.textContent = "$" + p.price;
		div.append(image, title, price);
		mainDiv.appendChild(div);
	});
}
