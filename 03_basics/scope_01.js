// global and blocked level scope
//global scoped variable can be accessed within blocked scope but blocked scoped should not be accessed outside blocked scoped for better code behavior.that why var should not be used to prohibit bugs
//{} this is simply the scope

let var1=330//globally accessible


if(true){
    //blocked scope
    let var1 =10
    const var2 =20
    var var3 = 30

    // console.log("Inside block:",var1);
}
// console.log("Outside block also gloablly:",var1);//give error as not defined
// console.log("Outside block also gloablly:",var2);//give error as not defined
// console.log("Outside block but var keyword:",var3);//this is problematic as accessible outside of the scope
// console.log("Outside block also gloablly:",var1);

// *****************************Closure**************************
//child method or function can access parent variables
// console.log("After simple scope:--->");

function oneFunc(){
    //global scope for child function
    const userName = "Noman"
        function twoFunc(){
        let course = "Learn JS with fun"
        console.log(userName)//accessible as username is treated as global for this child function

    }
    // console.log(course)//as this is parent console.it doesnt have the access to this variable
    
    twoFunc()
}
// console.log(userName);//wont be accessible as outside of the function one scope
oneFunc()

// ##########################Hoisting####################
/*Hoisting=Declarations are moved to the top of the function,variables and class's scope
Allows us to use them before they are declared
*/
//normal function allows hoisting  

console.log(hoistingFunc(3))//top of the scope as hositing
function hoistingFunc(number){
    return number**2

}
// console.log(hoistingFunc(3))

//when we store a function to a variable we called that declaration as expression

// console.log(expFunc(10))//cant access before initialization error so hoisting is not allowed
const expFunc = function (number){

        return number*10
}
console.log(expFunc(10))