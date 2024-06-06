var str = ["raj", "ravi"];
var spliter = str.map(function (str) {
	return str.split("").reverse().join("");
});

console.log(spliter);
let name1 = str.flatMap(function (str) {
	return str.split("").reverse().join("");
});

// console.log(name1);
// let names2 = ["raj dixit", "john", "son dixit", "james"];
// let namex = names2.filter(function (names2) {
// 	return str.endsWith("dixit");
// });
// console.log(namex);

let arr = [2, 3, 5, 7, 2, 6, 3].array.forEach(element => {
    
});(function (arr) {
	for (let i = 0; i < arr.length; i++) {
		let count = 1;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
			}
		}
		if (count == 1) {
			res += arr[i];
		}
	}
});
console.log(res);
