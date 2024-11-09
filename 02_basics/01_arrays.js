//Array

const myArr = [0,1,2,3,4,5,true,'Prashanth']
const myHeros = ["Iron Man", "Captain America"]
// console.log(myHeros[1]);
// console.log(myArr[5]);

const myArray = new Array(1,2,3,4,5)
// console.log(myArray[1]);

// Array Methods 
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)  // if we use unshift then we have to move all the remaining values so it's kind of time taking process
myArr.shift()

// console.log(myArr)

// methods which gives boolean values

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)) //if not have it returns -1

// const joinArr = myArr.join()  //it converts object into a string
// console.log(joinArr)
// console.log(typeof joinArr)


// Slice or Splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
// console.log(myn1);
console.log("B ",myn1);

const myn2 = myArr.splice(1,3);
// console.log(myn2);
console.log("C ",myArr);