//control flow or flow based on conditions 
// if(true){will be executed}

const myBalance =500
let state=true
let count = 0

if(myBalance>=800 && state && count ===7){
    console.log("All three is true");


}else if (!state) {
    console.log("State is false");
    
}else if(state && count==7){
    console.log(`State and count is : ${state} and ${count}` );

}else{
    console.log("Else is executed")
}