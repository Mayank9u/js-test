// stack(primitive), heap(non-primitive)

let myYoutubeName="mayankchoudharysir"

let anotherName = myYoutubeName
anotherName="learnerslist"

console.log(anotherName);
console.log(myYoutubeName);   // stack m copy milti h, copy m change hone se original bhi change ho jata h

let user ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = user
userTwo.email ="mayank@google.com"

console.log(user.email);
console.log(userTwo.email);   //heap m direct referance milta h
