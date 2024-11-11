const uid = "abc123";

var fullName ="Prashnath Bhisetti";
var email = "prashu143@gmail.com";
var password ="123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// console.log(`
//     With Unique ID : ${uid}
//     User is : ${fullName}
//     and his email is : ${email}
//     and uses the password : ${password}
//     `);


//L7- operators

// Discount Formula : D = (L-S)/L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = ((listingPrice - sellingPrice)/listingPrice) * 100;

// console.log("Discount Price :"+discountPrice);

displayDiscountPrice = Math.round(discountPrice);
// console.log(displayDiscountPrice+"% off");

//L8 - type and operator precedence

// console.log(typeof displayDiscountPrice)

// console.log((1 + ( (2 ** 3) * 4 / 5) ) )
// console.log((1 + ( ( (2 ** 3) * 4 ) / 5) )>6)
//precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//L9-  what are conditionals

// if , if-else,nestedif, if-else-if ladder
var temparature;

temparature = 20;
if(temparature<= 20){
    console.log("Low Temparature")
    if(temparature <=10){
        console.log("very cold")
    }
}else{
    console.log("high")
}

//L10- Logical conditionals

if(fullName && email && password){
    console.log("Entered all the values");
}

var isEmail = true;
var isGoogle = false;
var isFacebook = false;

if(isEmail || isGoogle || isFacebook){
    console.log("Login Success");
}

//L11 - Ternary Operator

var authenticated = true;

// if(authenticated){
//     console.log("Show signout button")
// }else{
//     console.log("Show login option")
// }

authenticated? console.log("Signout") : console.log("Login")

//L12 - switch for role based access

// create an application with following roles:
// admin - get full access 
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content 

var user ="testprep";
switch(user){
    case "admin":
        console.log("get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Please choose the appropriate role");
        break;

}