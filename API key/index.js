const api_key = "d3f6b22c";
const resultDiv = document.getElementById("result");
const inputBox = document.getElementById("inp");  
const btn = document.getElementById("btn");
btn.addEventListener("click", fetchData);
function fetchData() {
	fetch(`https://www.omdbapi.com/?t=${inputBox}&apikey=${api_key}`)
		.then(function (res) {
			res.json();
		})
		.then(function (data) {
			console.log(data);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayData(movies) {
	movies.array.forEach(function name(params) {
		const myDiv = document.getElementById("main");
	});
}
