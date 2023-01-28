
// Frist problem of array.

// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple','Banana','Orange'];
var position = fruits.indexOf("Banana");
// console.log("positon of Banana on the string is: "+position);

fruits[position] = "Mango"
// console.log("the new array is: ", fruits);

fruits.pop();
// console.log(fruits)
fruits.push("WaterMelon");
// console.log(fruits);

// Second Problem 

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.


// var myScore = 85;
// var tomScore = 66;
// var janeScore = 95;
// var peterScore = 56;

const names = ['azad','tom','jane','peter','goddu','choddu'];
const scores = [85,66,95,56,39,41];

for (i=0;i<names.length; i++){
    for (i=0;i<scores.length;i++){
        if (scores[i]>=80){
            console.log(names[i]," got A grade");
        }
        else if(scores[i]>=60 && scores[i]<80){
            console.log(names[i], "got B Grade");
        }
        else if(scores[i]>=50 && scores[i]<60){
            console.log(names[i], "got C Grade");
        }
        else if(scores[i]>=40 && scores[i]<50){
            console.log(names[i], "got D grade. ")
        }
        else{
            console.log(names[i], "sorry, you failed, better luck next time.")
        }
    }
}

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.


// var num1 = 311;
// var num2 =600;
// var num3 = 745;

// if(num1>num2){
//     if(num1>num3){
//         console.log("maximum number is: ",num1);
//     }
//     else{
//         console.log("hello",num3)
//     }
    
// }
// else if(num2>num3){
//     console.log("maximum is: ",num2);
// }
// else{
//     console.log("maximum number is: ",num3);
// }

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

// var firstSide = 9;
// var secondSide = 11;
// var thirdSide = 19;

// if (firstSide===secondSide || firstSide===thirdSide || secondSide==thirdSide){
//     console.log("this triangle is a Isosceles.");
// }
// else{
//     console.log("this triangle is not a Isocceles.");
// }
// leet code 217
const prices = [11,34,22,25,11];
let test = prices[0];
// console.log(test);
// for (i=1;i<prices.length;i++){
//     if(prices[i]===test[0]){
//         test.push(prices[i]);
//         console.log(test);
//     }
   
// }
// console.log(test.length);
// if(test.length>1){
//     console.log("appeared two time")
// }
// else{
//     console.log("unique value");
// }