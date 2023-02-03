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
console.log(`total wood required for your furniture are ${finalWoodrequired} cft. `);


// find cheapest phone from an array 

const phones = [
    {name : "samsung", color: "black", camera: "12mp", storage: 32, price: 5},
    {name : "Iphone", color: "Matt Blue", camera: "12mp", storage: 56, price: 6},
    {name : "Xaomi", color: "silvar", camera: "48mp", storage: 32, price: 7},
    {name : "Oppo", color: "Golden", camera: "32mp", storage: 32, price: 8}
    
]

function cheapestPhone(allPhones){
    let cheapestMobile = allPhones[0];
    // console.log(cheapestMobile);
    for(let i = 0; i<allPhones.length; i++){
        const phone = allPhones[i];
       if(cheapestMobile.price>phone.price){
            cheapestMobile= phone;
       }
    }
    return cheapestMobile;
}  
const selectedPhone = cheapestPhone(phones);
console.log(selectedPhone);