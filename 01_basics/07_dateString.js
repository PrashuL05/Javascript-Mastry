// dates 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString);

// let myCreatedDate = new Date(2024,0,25);
// let myCreatedDate = new Date(2024,0,25,5,6);
// let myCreatedDate = new Date("2024-01-25");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp  = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
//convert to seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1); //months always starts from 0
// console.log(newDate.getDay()); //
// console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday: "long"
})