const accountId = 123;
let accountMail = "prashnath@gmail.com";
var accountpassword ="Prashanth123@";
accountCity ="AP";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// accountId = 456; // not allowed to change

accountMail = "prashu@gmail.com";
password ="Prashu123@";
accountCity = "portblair";

console.log(accountId);
console.table([accountId,accountMail,accountpassword,accountCity,accountState]);