const marvel_heroes = ["Ironman","Spiderman","Black Panther","Captain"]
const dc_heroes = ["Superman","Batman","Flash","Black Adam"]

//push to join array within array format

// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)

//use concat to show as a new merged array
const mergedByConcat = marvel_heroes.concat(dc_heroes)
console.log("Merged by concat",mergedByConcat);

//best to use spread operator to get elements individuallu

const mergedBySpread = [... marvel_heroes,... dc_heroes]
console.log("Merged by spread operator :",mergedBySpread)

//check array
console.log("Is this an array?",Array.isArray("Noman"));
//convert to array
console.log(Array.from("Noman-Dev"))

//array from a set of elements
let firstElement ="I "
let secondElement ="am "
let thirdElement ="Web"
let fourthElement ="Enthusiast"
console.log((Array.of(firstElement,secondElement,thirdElement,fourthElement)))

//flat all elements of depth arrays
const depthArrays = [1,2,3,[4,5,6],7,[8,[9,10,[11,12]]]]
let resultFlat = depthArrays.flat(3)//recursively flattening till depth=3
console.log(resultFlat);