/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} -->basic syntax */

for(let i=0;i<=10;i++)
    {

        // console.log(`The value of ${i} iteration is : ${i}`);
    }


const myArr = ["Abir","Kalam","Hridoy","Topu","Sohag"]
// console.log(myArr.length);
for(k=0;k<myArr.length;k++)//not less than or eqal as array starts from 0
    {

        // console.log(`The ${k} th index of array is: ${myArr[k]}`);
    }

    // *************Break and Continue*************

    //break-->stops the entire loop alos the successive iterations when encountered
    //continue--> only skips the current iteration of the loop but continues the successive iterations

    for (let i = 1; i <= 10; i++) {
        if(i==5){
            console.log(`${i} detected and loop's terminated`)
            break
        }
        console.log(i);
    }
//continue
    for (let i = 1; i <= 10; i++) {
        if(i==5){
            console.log(`${i} detected and removed but successive iterations printed`)
            continue
        }
        console.log(i);
    }