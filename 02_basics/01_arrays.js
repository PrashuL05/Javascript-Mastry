//Array

const myArr = [0,1,2,3,4,5,true,'Prashanth']
const myHeros = ["Iron Man", "Captain America"]
// console.log(myHeros[1]);
// console.log(myArr[5]);

const myArray = new Array(1,2,3,4,5)
// console.log(myArray[1]);

// console.log(myArr)
// Array Methods 
myArr.push(6)
// console.log(myArr)
myArr.push(7)
// console.log(myArr)
myArr.pop()
// console.log(myArr)
myArr.unshift(9)  // if we use unshift then we have to move all the remaining values so it's kind of time taking process
// console.log(myArr)
myArr.shift()

// console.log(myArr)

// methods which gives boolean values

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6)) //if not have it returns -1

const joinArr = myArr.join()  //it converts object into a string
// console.log(joinArr)
// console.log(joinArr[4])
// console.log(typeof joinArr)
// console.log(joinArr)
// console.log(myArr.toString())
// console.log(typeof myArr.toString())



// Slice or Splice
console.log("Before A ",myArr);

const myn1 = myArr.slice(1,3);
// console.log(myn1);
console.log("AFter Slice : B ",myArr)


const myn2 = myArr.splice(1,4);
// console.log(myn2);
console.log("After Splice : C ",myArr);