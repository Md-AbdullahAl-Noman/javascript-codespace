//for of loop
// for (const iterator of object) {}
//for of loop no increment and decrement needed
let myArr =[1,2,3,4,5,"Noman","Code"]
for(const arrElement of myArr)
    {
        // console.log(arrElement);
    }


let myName ="Md Abdullah Al Noman"
for(const iterator of myName)
    {
        // console.log(`The name elements : ${iterator}`);
    }

//map --> object like structure holds as 'key','value' pari--->used for uniqueness of values

let map = new Map()

map.set('BD','Bangladesh')
map.set('IN','Bangladesh')
map.set('USA','United States of America')

// for(const mapIterator of map)
//     {
//         console.log(mapIterator);//gives array of each key value
//     }

for(const [key,value] of map)
    {
        console.log(`key:${key} value : ${value}`);
    }