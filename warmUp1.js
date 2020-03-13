// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


//1-

function combine() {

	var firstName = 'oussema':

	var lastName = 'sferi';

return firstName + ' ' + lastName;

}

//2- 

function multipleOf13() {

	if ((13 % 3) === 0) {

	return '13 is a multiple of 3';
	}

return '13 is not a multiple of 3';

}


//3-

function average() {

var age = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];

	var sum = 0; 

	for(var i = 0; i < age.length; i = i +1) {

	sum = sum + age[i];

	}

	return sum / age.length;

}

//4-

function age() {

	var myAge = 31;
	
	return myAge * 365 * 24 * 60 * 60;

}