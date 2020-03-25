// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

var females = ["marwa", "rouaa", "chayma", "sahar", "meriem", "ibtissem"];

var males = ["wael", "mohamed", "zakaria", "aymen", "ramy", "ahmed", "nidhal", "habib", "riadh"];

var instructors = ["dhia", "hachem", "jihed", "houda", "omar", "seif", "insaf"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(arr) {

return arr[Math.floor(arr.length / 2)];

}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function even(arr) {

	var newarr = arr;

	for(var i = 0; i < arr.length; i += 2) {

		newarr[i] =  arr[i] * 2;

	}

return newarr;	
}