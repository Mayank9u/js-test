const name= "mayank"
const repoCount = 50
console.log(name+repoCount+"value");
console.log(`hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String('mayank-choudhary')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne ="  hitesh   "
console.log(newStringOne.trim());

const url = "https://mayank.com/mayank%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('mayank'));  //true
console.log(gameName.split('-'));   //['mayank', 'choudhary']
