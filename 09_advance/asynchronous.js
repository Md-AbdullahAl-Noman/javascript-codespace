// async-->asynchronous js allows us to execute code without waiting for the completion of time-consuming tasks.instead of blocking the main thread ,these these tasks are delegated to browsers background processes and once completed a callnack function is called to handle the the Result

//a promise object represents the eventual completion or failure of an asynchronous operation and its resulting  value

//1
//producing code
// const firstPromise = new Promise(function(resolve,reject){

//     //Do an async operation
//     setTimeout(function(){

//         console.log("First promise is called");
//         resolve();

//     },1000)

// })

// firstPromise.then(function(){
//     console.log("First and  fulfilled");
// }).catch()

// 02

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Second promise is resolved");
//         resolve({name:"Ali Noor",
//             id:"2121"
//         })

//     },2000)

// }).then((user)=>{
//     console.log("Second consuming code");
//     console.log(user);
// })

// 03

// const promiseFour = new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         let isValid = true;

//     if (isValid) {
//         console.log("Third one is resolved");
//         resolve()

//     }else{
//         console.log("Third one is rejected");
//         reject("Error passed")
//     }

//     },1000)

// })

// promiseFour.then(()=>{
//     console.log("Promise four resolved");
//     return 5*5

// }).then(function(result){
//     console.log(result);

// }).catch(function(error){
//     console.log(error);
// })

// 05

const promiseFive = new Promise((resolve, reject) => {
  let isUser = false;

  if (isUser) {
    resolve({ name: "Noman", id: 1122 });
  } else {
    reject("Rejection encountered ");
  }
});

async function firstAsyncToUse() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

firstAsyncToUse();


//fetch-->also like promise just consume

// async function fetchOne(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(respone);
//     const data = await response.json()
//     console.log(data);
// }
// fetchOne()



//fetch with .then and .catch


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response
})
.then((data)=> 
    {console.log(data);}
// {console.log("hello");}
)
.catch((error)=>{
    console.log(error);
})