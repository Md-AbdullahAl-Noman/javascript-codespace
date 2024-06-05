//function declarations

function printFunction(){
    console.log("Simple print function called")
}

printFunction()

function paramFunc(num1,num2){

    return `The returned sum is : ${num1+num2}`
    // after return this codes will be ignored

}

let result = paramFunc(7,7)
console.log(result);
//undefined

function namePrint(name="Rony"){
    if(!name){
        return "Please enter your name"
    }

    return `Your name is : ${name}`

}

// console.log(namePrint("Noman"))
console.log(namePrint())//default name will be printed

// ******Rest operator*****
console.log("Use of rest operator");//to bundle individual arguments or elemnents

function calculateTotalPrice(val1,val2,...sum){//val1 and val2  corresponds the first and second arg

    return sum
}
let totalPriceArray = calculateTotalPrice(200,500,800,100,150)
console.log(totalPriceArray);


// ************Object in function*************

// style1
const objFunction = {
    name:"Noor",
    email:"noman1@gmail.com",
    age:24,
    city:"Dhaka"

}

function forObject(object){
    return `The name is : ${object.name} and email is : ${object.email}`
}

console.log(forObject(objFunction))

// style2

function secondForObject(objecttopass){
   return `Email is : ${objecttopass.email}`
}

let returnedResult = secondForObject({
    name:"Rakib",
    email:"rakib@gmail.com"
})
console.log(returnedResult);