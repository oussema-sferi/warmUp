// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.

function myTrueFun() {

	return true;
}

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.

function color(inp) {

	if(typeof inp == "string") {

		return true;
	}  

	return false;
}

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

function prime(n) {

var count = 0;

	for (var i = 2; i < n; i = i + 1) {

		if(n % i === 0) {

			count = count + 1;
		}
	}

	if(count === 0) {

		return n + " is prime";
	}

	return n + " is not prime";
}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function same(a, b) {

	if (a === b) {

		return true;
	}

	return false;

}