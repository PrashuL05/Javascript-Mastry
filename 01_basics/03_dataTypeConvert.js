let score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

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
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn)

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

/*****************************Operations*******************************************/
let value  = 3
let negValue = -value
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello";
let str2 = " Prashanth";
let str3 = str1+str2;

// console.log(str3); // Hello Prashanth

// console.log("1"+2); //12
// console.log(1+"2") //12
// console.log(1+"2"+2) //122
// console.log(1+2+"3") //33
// console.log(2+3*5%3) // don't use like this use parenthises //res= 2 because 3*5= 15+2 = 17%3 = 2
// console.log((2+3)*(5%3)) // 5*2 = 10

// console.log(+true) // returns 1
// console.log(+"") // 0

let counter = 0;
// console.log(counter);
// console.log(++counter);
// console.log(counter++)
// console.log(counter)

//ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


/****************Data types summary************************** */
/*
data types are 2 types :
 1. Primitive data type     - (also known as call by value)
 2. Non-Primitive data type - (also known as call by reference)

// Primitive data types: 7
 1. string 
 2. number
 3. boolean
 4. null
 5. undefined
 6. symbol
 7. bigInt

 */
const score1 =100; // dynamic typed language 
const scoreValue = 100.3

const isLoggedIn1 = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false


/*
// Non - Primitive data types:
1. array
2. objects
3. functions
    
*/

const bigNumber = 234253254353222234242n;
// console.log(bigNumber);
const heros = ["shaktiman","naagraj","doga","krrish"];
let myObj = {
    name:"prashanth",
    age:24
}

const myFunction = function(){
    console.log("hello World");
}
myFunction()

console.log("Bigint : ",typeof bigNumber);
console.log("undefined : ",typeof userEmail);
console.log("Null : ",typeof outsideTemp);
console.log("my Object : " , typeof myObj);
console.log(" my Function : ",typeof myFunction );
console.log("Heros : ",typeof heros);
console.log("Symbol : ",typeof anotherId);
