const myBalance = 20000.454545
// console.log((myBalance.toString()))
console.log(typeof myBalance);

const stringBalance = myBalance.toString()
console.log(typeof stringBalance)
console.log((myBalance.toFixed(3)))
console.log((myBalance.toPrecision(6)))

// ##########################Maths#####################
const dueBalance = 1500

console.log(`Absolute value is : ${(Math.abs(-900))}`)
console.log(Math.max(2,6,7,89,99))
console.log(Math.min(2,6,7,89,99))
console.log(Math.ceil(5.6))
console.log(Math.floor(5.6))
//math.random generates numers from 0 to 1
console.log(Math.floor(Math.random()*10+1))