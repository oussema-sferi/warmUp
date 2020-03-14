// 1 - Complete the function cube that returns the cube of x:

function cube(x) {
  return x * x * x;
}

// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
  if(string1.length === string2.length) {

  	return 'true';

  }

  return 'false';

}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(number) {

	var x;
  
	if (number <= 100 && number > 70) {

		x = 'A';

		} else if(number <= 70 && number > 40) {

			x = 'B';

			} else if(number <= 40 && number > 0) {

				x = 'C';
			
				} else {

					x = 'please put a number between 0 and 100';
					}

	return x;

}
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) {
  var result = '';

  while(count > 0) {

  	result = result + str;

  	count = count - 1;

  }

  return result;
}
