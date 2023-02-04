// Declearing different types of variable

var isOld = false;
var number = 12;

// console.log(typeof isOld, typeof number);


let name = "Azad";
const pi = 3.14;
name = "Sadiya";
// console.log(name, pi);

// while loop;

let i = 7;

while(i<=19){
    // console.log(i);
    i +=2;
}

// array 

// const arr = [3,4,2,63,11, 100, 5, 102, 222,5555];
// let arrayLength = arr.length;
// arr[3]  = 22;
// let sum  = arr[0]+arr[1];
// arr.pop();
// // console.log(`length of the array is: ${arrayLength} and fourth position's value is : ${arr[3]}, and sum of first two values of the array is: ${sum} ,and final array is: ${arr}`);

// for( value of arr){
//     // console.log(value);
// }


// const arr = [3,4,2,63,11, 100, 5, 102, 222,5555];
// console.log(arr.length);

// for(let j = 0; j<arr.length; j++){
//     // console.log(arr[j]);
//     if(arr[j]>80){
//         console.log("more than 80 is---------------------------------------: ",arr[j]);
//     }
  
    
// }

// function recap 

function sum(num1,num2,num3){
    let result = num1*num2*num3;
    return result;
}

const finalSum = sum(4,2,3);

console.log(finalSum);

// object 

const myObj = {
    brand: "sumsung",
    color: "silvar",
    price : 22100
}
myObj.color="black";
console.log(myObj);