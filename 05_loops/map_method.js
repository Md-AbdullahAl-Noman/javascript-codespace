//map also returns the functional values arrays etc

let myArr = [1,2,3,4,5,6,7,8,9,10]

// myArr.map(callbackFunc).use map over filter when need to perform transformation of original array or apply operation and returnes a new array

let returnedMap = myArr.map( (arrnum)=>{
    return arrnum**5
} )
// console.log(returnedMap);

// #########Chaining########### --> map().map().filter()

const returendChained = myArr
                            .map( (num)=> num*10 )
                            .map( (num)=> num +2 ) 
                            .filter( (num)=> num >25 )

console.log(returendChained);