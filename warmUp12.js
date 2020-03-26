// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"

function reverseStr(str) {

	var result = "";

	var i = str.length - 1;

	var j = 0;

	while(i >= 0 || j < str.length) {

		result = result + str[i] + j;

		i -= 1;

		j += 1;

	}

return result;

}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength(arr) {  // not completed 

	for(var k = 0; k < arr.length; k += 1) {

		arr[k] = arr[k].length;

	}

	var max = Math.max(...arr);

	var newarr = [];

	var i = 1;

	while(i <= max) {

		for(var j = 0; j < arr.length; j += 1) {

			if(arr[j].length === i) {

				newarr.push(arr[j]);

				console.log(newarr); //for testing

			}

		}

		if (newarr.length > 1) {

			i = max + 1; // to leave the while loop	

		} else {

		i += 1;

		}

	}

return newarr;

}