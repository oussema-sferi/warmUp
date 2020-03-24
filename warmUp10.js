// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

/* so always, the least parameter will be substracted from the greatest parameter till we reach the condition when 

the two parameters will be equal which will be the result or till we reach one of the two parameters will be equal to 0,

so the result will be the value of the second parameter (as we know 0 can be divided by every number).*/

function greatestCommonDiv(x, y) {

  if(x === y) {

    return x;

  } else if(x === 0) {

    return y;

  } else if(y === 0) {

    return x;
  
  } else if(x > y) {

    return greatestCommonDiv(x - y, y);

  }

return greatestCommonDiv(x, y - x);

}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

/*instead of using the + operator, we will use incrementation by 1 of "a" , y times, and the stop condition will be when the second parameter

will reach 1 after decrementing by one every time.*/

function sum(a, b) {

  if(b === 1) {

    return a + 1;

  }

return sum(a + 1, b - 1);

}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
