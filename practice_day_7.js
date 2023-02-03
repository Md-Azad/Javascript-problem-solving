// remove duplicate values from an array.

const nameList = ["azad", "akhi","ibrahim","sadiya", "azad","ibrahim","akhi","sadiya","sadiya","sadiya"];

function removeDuplicate (names){
    let uniqeName = [];
    for (let i = 0; i<nameList.length; i++){
        let name = nameList[i];
        // console.log(name);
    
        if(uniqeName.includes(name) ==false){
           uniqeName.push(name);
        }
        
    }
    return uniqeName;
}

const finalList = removeDuplicate(nameList);
// console.log(finalList);


// console.log(nameList.indexOf("kabul"));


// Wood Calculator 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood =  3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChiarWood = chairQuantity * perChairWood;
    const totlaTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;
    
    const totalWood = totalBedWood+ totalChiarWood + totlaTableWood;

    return totalWood;
}

const finalWoodrequired = woodCalculator(25,5,1);
console.log(finalWoodrequired);
