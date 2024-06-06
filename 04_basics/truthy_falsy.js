const returnedName = "This name should be returned"
if(returnedName){//no condition check just based on thruthy and falsy values
    console.log("Got the name")
}else{
    console.log("Fetch again")
}

const returnedName2 = ""//falsy
if(returnedName){//no condition check just based on thruthy and falsy values
    console.log("Got the name")
}else{
    console.log("Fetch again")
}

// falsy values
// "",0,-0,BigInt 0n,false,NaN,undefined,null

// truthy values
// except falsy values, " ",true,[],{},"0",function(){}//empty function

const returnedName3 = "0"
if(returnedName){//no condition check just based on thruthy and falsy values
    console.log("Got the name")
}else{
    console.log("Fetch again")
}
const returnedName4 = {}
if(returnedName){//no condition check just based on thruthy and falsy values
    console.log("Got the name")
}else{
    console.log("Fetch again")
}

// empty object and array chechk
//array
const myArr = []
if(myArr.length===0) 
    {
        console.log("Array is empty");

    }else{
        console.log("Not empty");
    }
  
    
const myObj1 = {}
if(Object.keys(myObj1).length===0)
    {

        console.log("Empty object found");
    }else{
        console.log("Not an empty object");
    }
    // console.log(Object.keys(myObj1));