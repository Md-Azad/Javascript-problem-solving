// String reverse with for loop 

const reverseMaker = (word)=> {
    //Write Your solution Here
    let reversString = "";
    var l = (word.length-1);
    for(let i=l;i>=0;i--){
        reversString = reversString +word[i];
    }
    return reversString;
  };
//   const finalString = reverseMaker("Bangladesh");
//   console.log(finalString);


//   Detect vowel and consonent 

// const solution = (letter)=> {
//     //Write Your solution Here
//    //dont forget to return
//     if(letter ==="a" || letter==="e" || letter ==="i" || letter ==="o" || letter ==="u" || letter ==="A" || letter==="E" || letter ==="I" || letter ==="O" || letter ==="U"   ){
//         return "Vowel";
//     }
//     else{
//         return "Consonent";
//     }


//   };

//   console.log(solution("a"));
//   console.log(solution("X"));
//   console.log(solution("B"));
//   console.log(solution("U"));


  const solution = (letter)=> {
    //Write Your solution Here
   //dont forget to return
     if(letter ==="a" || letter==="e" || letter ==="i" || letter ==="o" || letter ==="u" ){
          return "VOWEL";
      }
      else{
          return "CONSONENT";
      }
  };
//   console.log(  solution('a'));
//   console.log(  solution('u'));
//   console.log(  solution('y'));
// //   solution('u');
//   solution('k');

// Case 1: totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ])


var shoppingCart = {
    suger: 5,
    milk: 6,
    tea: 3
}

// console.log(Object.values(shoppingCart));
// console.log(shoppingCart["suger"]);

// var keys = Object.keys(shoppingCart);
//  let totalCost =  0;
// for(i=0; i<keys.length; i++){
//     // console.log(keys[i]);
//     var propertyName = keys[i];
//     var values = shoppingCart[propertyName]
//     // console.log(values);

//     totalCost = totalCost+values;
   
// }
// console.log(totalCost);

// function objectArrayTotal (arr){

// }

// totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ])

const arr = [{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ];

function totalCost(ProductsPrice){
    let total = 0;
    for (i=0;  i<ProductsPrice.length; i++){
        total +=ProductsPrice[i].price;
    }
    return total
}
let costTotal =totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]);
let secondTotal = totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}]);
// console.log(costTotal);
// console.log(secondTotal);



// Delete a property from an object
// 255
// 79
// Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.

//  If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’

const deleteProperty =(arr)=>{
    // Write your code here.
        let obj = arr[0];
        let prop = arr[1];
        // console.log(obj);
        // console.log(prop);
        if(prop in obj){
            delete obj[prop];
            return "YES"
        }
        else{
            return "NO";
        }

    }

    const finalObj = deleteProperty([{fname:'John', age: 30},'fname']);
    const finalObj1 = deleteProperty([{fname:'John', age: 30},'sex']);
    // console.log(finalObj);
    // console.log(finalObj1)


// Learn how to create a temperature converter. Your task is to provide a value in Fahrenheit and then convert it into Celsius . Then round it up to two decimal places if you get fraction. And return the rounded value as output. 



// Alert: The output must be in a number format. 


// The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:

// ℃=(℉-32)/1.8

function temperatureConverter(valNum) {
    let C = (valNum-32)/1.8;
    let celsius =Number(C.toFixed(2));
    return celsius;

}
let finalCelsius = temperatureConverter(103);
// console.log(finalCelsius);

// swap variable 

let temp ;

let var1 = 10;
let var2 = 20;
console.log(var1,var2);
temp = var1;
var1 = var2;
var2 = temp;
console.log(var1,var2);
