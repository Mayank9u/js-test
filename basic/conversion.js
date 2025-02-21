let score = "33 abc"

console.log(typeof score);  //string
console.log(typeof (score)); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //Number
console.log(valueInNumber); //NaN

let scores = null

console.log(typeof scores);  //object
console.log(typeof (scores)); //object

let valueInNumbers = Number(scores)
console.log(typeof valueInNumbers); //Number
console.log(valueInNumbers); //0

// "33"= 33
// "33abc"= NaN
// true =1 false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1= true
// 0= false
// "mayank"=true
// ""= false

let someNum = 33
let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof stringNum);


