// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr1, arr2) {

	for(var i = 0; i < arr1.length; i += 1) {

			if(arr1[i] === arr2[0]) {

				var counter = 1;

				for(var j = 1; j < arr2.length; j += 1) {

					var k = i;

					if( arr[k+1]===  arr2[j]) {

					counter += 1;

					k += 1;

					
					}

				}	

					if(counter === arr2.length) {

						return true;

					}

				return false;
			}
	}	
}