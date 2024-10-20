const name = "prashanth";
const secondName = "bhisetti";

// console.log(secondName+"."+name); // old method

//use string interpolation (on the go)

//console.log(`Hello my name is ${secondName.toUpperCase()}.${name.toUpperCase()}, Good morning!..`);

//string declare

const gameName = new String("prashanth"); //now string is an object so there are diff methods to access this string values
// console.log(gameName);
// console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(4))
console.log(gameName.at(7))
console.log(gameName.indexOf('s'))
//better to check with brower for this object it will show all the string method

// const newStr = gameName.substring(0,4) //0-to-3
// console.log(newStr);

const strSliceMethod = gameName.slice(-9,9) // it accepts minus values also (reverse)
// console.log(strSliceMethod);

const strTrim = "  Prashanth  ";
// console.log(strTrim)
// console.log(strTrim.trim())

const strReplace = "https://prashanth.com/prashanth%20bhisetti";
console.log(strReplace.replace("%20","/"));

console.log(strReplace.includes('prashanth'))
console.log(strReplace.split('/'))

console.log(gameName.anchor('Link'))
