// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively

function larger(str1, str2) {

	var res = '';

	if(str1.length > str2.length) {

		res = str1 + ' is the larger string';

	} else {

		res = str2 + ' is the larger string';
	}

	return res;

}

function smaller(str1, str2) {

	var res = '';

	if(str1.length > str2.length) {

		res = str2 + ' is the smaller string';

	} else {

		res = str1 + ' is the smaller string';
	}

return res;

}
// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
<<<<<<< HEAD
 
 function counting(n) {

 var result = n; 
 
	result = result +  counting(); // not completed , wrong

	return result;
 }   
=======
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5

function meet(n) {

	result = 'meet 1';

	for(var i = 2; i < n - 1 ; i = i +1) {

		result = result + ', ' + i;

	}


	return result + ' and ' + (n-1) ;

}



function meetAndGreet(n) {

	var f = 1;

	var x = 2;

	var str = 'welcome 1 \n';

	while(x <= n) {

		if(x === 2) {str = str + 'welcome ' + x + ', ' + 'meet1' + '\n';
		
			x = x + 1;

		} else {

			str = str + 'welcome ' + x + ', ' + meet(x) + '\n';	

			x = x + 1;

		}

	
	}

		return str;

}



// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
<<<<<<< HEAD

function shortestWord(str) {

var arr = str.split(' ');

var short = '';


  for(var i = 0; i < arr.length; i = i + 1) {

    if(arr[i].length < arr[i+1].length) {

      short = arr[i];

    } else {

      short = arr[i + 1];
    }

  }

return short;


}

=======
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391
