let score = undefined;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true = > 1 , false =>0,
"" => false , "prashanth" => true
null => object after convert to number becomes 0.
undefined => object after convert to number becomes NaN.

*/

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn)

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/*****************************Operations*******************************************/
