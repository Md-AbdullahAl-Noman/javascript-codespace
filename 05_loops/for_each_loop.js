//for each loop to iterate over array of objects directly and simply

//but for each loop returns undefined or nothing

const eachLoop=[
    {id:1,
     name:"Noman"

    },
    {
        id:2,
        name:"Das"

    },
    {
        state:"logged in",
        isUser:true
    }
]

// eachLoop.forEach( function(items){//normal function as callback

//     // console.log(items);//all objects as item
//     console.log(items.isUser);
// } )

//using arrow function

eachLoop.forEach( (item)=> 
    {
        // console.log(item.name)
        
    }
)

//forEach method return undefined .to return something use method like filter
const numArr =[1,23,33,44]
const whatReruns = eachLoop.forEach( (item)=>
    {
       return item
    }
      

 )

//  console.log(whatReruns);//undefined

// ******************Filter method*****************

// const returnedArr = numArr.filter( (item)=>(


//     item
    
// ) )

// console.log(returnedArr);

const returnedArr = numArr.filter( (item)=>
(
    item >5
)
)

// console.log(returnedArr);

// same do using filter

const newArr = []

numArr.forEach( (num)=>
        {
            if(num>4)
                (
                    newArr.push(num)
            )

        }
)

// console.log(newArr);