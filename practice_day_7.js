// remove duplicate values from an array.

const nameList = ["azad", "akhi","ibrahim","sadiya", "azad","ibrahim","akhi","sadiya","sadiya","sadiya"];

function removeDuplicate (names){
    let uniqeName = [];
    for (let i = 0; i<nameList.length; i++){
        let name = nameList[i];
        // console.log(name);
    
        if(uniqeName.includes(name) ==false){
           uniqeName.push(name);
        //    console.log(uniqeName);
        }
        
    }
    return uniqeName;
}

const finalList = removeDuplicate(nameList);
console.log(finalList);


// console.log(nameList.includes("wasim"));

// if(nameList.includes("wasim")===false){
//     console.log("name is not listed on the list.");
// }
// else{
//     console.log("name on list");
// }


