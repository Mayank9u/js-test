console.log("Mayank");

const accId = 144455
// cannot be changed

let accEmail = "Mayank@gmail.com"
var accPassword = "1234"
accCity = "Jaipur" //this can also be done but avoid it

// accId = 2 
// const keyword cannot be changed
console.log(accId);

accEmail = "hc@gmail.com"
accPassword = "23124"
accCity ="Sikar" 

let accState

console.table([accId, accEmail, accPassword, accCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accState);
// this show undefined value

