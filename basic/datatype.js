// Primitive...call by value

// 7 types : Sting, Number, null, undefined, Symbol, BigInt

const score = 100;  //js is dynamically typed
// const score=100.3;
const isLoggedIn=true;
const temp=null;
let userEmail=undefined;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //false

const bigNumber = 165465132456413241n


//  reference type (Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "antman", "spiderman"]
let myObj = {
    name: "mayank",
    age: 26,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)  //undefined
console.log(typeof temp)   //object
console.log(typeof score)    //number
console.log(typeof myFunction)     //object function

// number => number
// string => string
// boolean => boolean
// null => object
// undefined => undefined
// symbol => symbol
// bigInt => bigint
// array => obect
// function => function
// object => object