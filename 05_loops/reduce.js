//reduce method all values to return as a sinle value

const myArr = [1,2,3,4,5]
let initialValue = 0;
const singleResult = myArr.reduce( (accumulator,currentvalue)=>
    {
        return accumulator+currentvalue

    },initialValue


)
// console.log(singleResult);

const myShopping = [
    {
        course:"JS",
        price:20
    },
    {
        course:"ML",
        price:100
    },
    {
        course:"React",
        price:80
    }


]

const total = myShopping.reduce( (acc,courseprice)=>
{

    return acc+courseprice.price
},0 )

console.log(total);
