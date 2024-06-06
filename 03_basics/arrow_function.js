//this keyword:refers to the current context.simply current context means scope current values

const myObj = {
    username:"Noman",
    id:101,
    greetings:function(){
        console.log(`${this.username},welcome to this learning platform`);
        console.log(this);
    },
    
    
}

// myObj.greetings()
myObj.username="Rakib"//current context(value) changed
// myObj.greetings()

// console.log(this);//empty objet as node environment by default global variable is empty but on browser it will show Window object as that is the global variable




function toCheckThis (){

    // console.log(this);///here this is not using for current context or { }like node env.If object this refers to the current context 
}
toCheckThis()











// ******************Arrow function**************
//simply remove the name of the function and add an => after ()

const arrowFunc1 = (num1,num2) => {
//explicit return is must here as {} is used for function definition
return num1+num2

}
// console.log(arrowFunc1(7,7))


//implicit returns means no {and no return } only parenthesis.this also useful when returns an object as needed to wrap object within parenthesis or it will give undefined

const arrowImplicitReturn = (num1,num2) => (num1+num2);
// console.log(arrowImplicitReturn(4,4))


const arrowImplicitReturn2 = (num1,num2) => ({name:"Noman"});
// console.log(arrowImplicitReturn2(4,4))

// ######################IIFE#############
//Immediately Invoked Function Expression(IIFE)
// Syntax: (function)(call)-->()()

(function iifeNamed(){
    console.log("Named iife called");
})();

//arrow function

( (username)=>{
    console.log(`${username} IIFE called`);
} )("Noman");//to end the scope or this will gives error