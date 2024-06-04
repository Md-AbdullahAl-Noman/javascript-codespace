let joiningDate = Date.now()
console.log(joiningDate)
console.log(typeof joiningDate)

let dateToSet = new Date()
console.log(dateToSet.toDateString())
console.log(dateToSet.getDate())
console.log(dateToSet.getMonth())
console.log(dateToSet.toString())
console.log(dateToSet.toLocaleString())
console.log(typeof dateToSet)

// customized
let newCreatedDate = new Date("04-07-2024")
console.log(newCreatedDate)
console.log(newCreatedDate.toDateString())
console.log(newCreatedDate.toLocaleString())
console.log(newCreatedDate.getTime())