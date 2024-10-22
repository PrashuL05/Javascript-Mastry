console.log("Numbers and Maths functionalities");
let n = 55.9548598;

// console.log(n);
const num = new Number(n) //number object : explicitly defined as number
// console.log(num);
const twoDec = num.toFixed(2);
// console.log(twoDec);

const balance = new Number(25656.544894);

// console.log([typeof balance, balance.toString()])
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

let otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3));
otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));
otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000000;
// console.log(hundreds.toLocaleString()) //us standard
// console.log(hundreds.toLocaleString('en-IN')) //

//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));