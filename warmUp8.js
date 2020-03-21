// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {

	var newarr = [];

	newarr.push(Object.keys(obj));

return newarr;

}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {

return Object.keys(obj).length;

}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(arr) {

	var newarr = [];


	for (var i = 0; i < arr.length; i++) {

			if(arr[i]["id"] < arr[i+1]["id"]) {

				newarr[i] = arr[i];

			} else {                                         // didn't completed it , i ll try to do it after the fcc 

				newarr[i] = arr[i+1];


			}

		
	}

	return newarr;

}