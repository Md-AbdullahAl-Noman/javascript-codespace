// const objSingleton = new Object()
// console.log(objSingleton)

const userObj ={
    fullname:{
        name:{
            firstname:"Md Adullah Al",
            "last name":"Noman"
        }
    }


}
// console.log(userObj);
// console.log(userObj.fullname);
// console.log(userObj.fullname.name.firstname);
 
//objects 
const obj1={
    name:"Ali",
    state:false
}

const obj2={}
obj2.id="101"
obj2.Loggedstate=true

console.log(obj2);
const obj3={obj1,obj2}
console.log(obj3);
//use of assign to merge objects
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);

//array of objects

const userList = [
    {
        name:"Noman",
        id:1

    },
    {
        name:"Das",
        id:2

    }

]

console.log(userList[1].name)

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(obj1.hasOwnProperty("name"))//to check a property

// *********Destructuring of object************
const objToDest = {

    coursename:"JS",
    courseInstructor:"JS Documnetation MDN",
    fees:0
}

const {courseInstructor:instructor} = objToDest
const {coursename} = objToDest
console.log(instructor);
console.log(coursename);