//objects can be declared in two ways : object literals and through constructor like Object.create

//object literals
let mySymbol = Symbol("KeyOne")
const myObj = {
    name:"Noman",
    "full name":"Md Abdullah Al Noman",
    age:"24",
    email:"noman@gmail.com",
    state:["Working","Learning","Sleeping"],
    greetings: function(){
        console.log(`Hello ${this["full name"]}`)
    },
    isLoggedIn:false,
    [mySymbol]:"Symobl as value",


}

//access by using dot and square brackets if multiple parts and symbols are there

console.log(myObj.age)
console.log(myObj["full name"])
console.log(myObj[mySymbol])
console.log(myObj.greetings())
myObj.phone="01834565695"
console.log(myObj)