//1st syntax of array

const myArr = [1,2,4,6,"Noman","Enjoy","Code"]
console.log(myArr)
console.log(typeof myArr)//object
//2nd syntax
const arr2 = new Array(3,6,9,"I","Love","JS")
console.log(arr2)

// **********Operations*************
console.log("Array operations :")

let stringArr = myArr.join()//array as string
console.log(stringArr)
console.log(typeof stringArr)//string

// console.log(myArr);
myArr.push(10,12)
console.log("After pushing elemnets:",myArr)
//pop or remove to the last elements
myArr.pop()
console.log("After pop :",myArr)
//unshift
myArr.unshift("The firt element now")
console.log(myArr)
//shift
myArr.shift()
console.log(myArr)
//to know the array length
console.log("The length of this second array :",arr2.length)
//access elements by index
console.log((arr2[3]))


// part2..