const randomColor = function(){
const hexCode = "0123456789ABCDEF"
let color = '#'
// console.log( Math.floor(Math.random()*16))

for(let i=0;i<6;i++)
    {
        color += hexCode[Math.floor(Math.random()*16)]

    }
 return color;
}
// console.log(randomColor());
let setIntervalTo;
const startColorChanging =function(){
   
    const changerFunc=  function(){
    document.body.style.backgroundColor=randomColor();

   } 
   setIntervalTo = setInterval(changerFunc,2000)

} 



const stopColorChanging =function(){
  clearInterval(setIntervalTo)
} 
document.querySelector("#b1").addEventListener('click',startColorChanging)
document.querySelector("#b2").addEventListener('click',stopColorChanging)


