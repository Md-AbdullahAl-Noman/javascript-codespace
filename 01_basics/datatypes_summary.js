// primitive like string ,Symbol,Number and non-primitive like Array,function,Object etc 

let firstComp = Symbol("Header")
let SecondComp = Symbol("Header")
console.log(typeof firstComp);
console.log(typeof SecondComp);
console.log(firstComp==SecondComp);//uniqueness of components
//array simply
let myArray = ["IronMan","Captain","Black Panther"]
console.log(myArray)
console.log(typeof myArray);

// function as a variable
let firstFunction = function myFunction(){
    console.log("Function is called")
}

firstFunction()
console.log(typeof firstFunction)

// Object
let firstObject ={
  name:"Noman",
  age:25,
  state:"Developing"

}

console.log(typeof firstObject)
