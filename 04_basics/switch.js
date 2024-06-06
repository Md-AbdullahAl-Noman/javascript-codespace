//multiple if-else will be reduced also the conditional operators uses
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//key will be evaluated for each value or lock and that block will be exeuted.after breks successive cases will be ignored means stops the entire flow but continue will just skip the current iteration
const checkName = "Noman"
switch(checkName){

    case "Rakib":
        console.log(`Name is Rakib`)
        break;
    case "Sabbir":
        console.log(`Name is Sabbir`)
        break;
    case "Nusrat":
        console.log(`Name is Nusrat`)
        break;
    case "Noman":
        console.log(`Name is Noman`)
        break;

    default:
        console.log("No name is matched");
        break;
}