//for in loop used to iterate over objects where keys are preffered 

let myObj = {
    game1:"HOD",
    game2:"DLS",
    game3:"Free Fire",
    game4:"PUBG"
}

for(const key in myObj)
    {
        console.log(key);//just keys will be printed
    }


for(const key in myObj)
    {
        console.log(myObj[key]);
    }

    //can not be iterated over map as it is not enumerable