const score = 400
const balance = new Number(100)
console.log(balance);  // [Number: 100]
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 15.46512
console.log(otherNumber.toPrecision(3));
const hudreds = 1000000
console.log(hudreds.toLocaleString('en-IN'));


//++++++++++++++++++++maths++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,5,24,2));
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);


