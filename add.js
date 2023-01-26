// function addition(a, b) {
//     //Write Your solution Here
//     return a+b;
// };

// console.log(addition(10, 20)); // 30
// console.log(addition(30, 20)); // 50
// console.log(addition(10, 90)); // 100

// // Converting hours to second 
// function howManySeconds(hours){
//     seconds = hours*60*60;
//     return seconds;
// }

// console.log(howManySeconds(12))//43200
// console.log(howManySeconds(8))//43200
// console.log(howManySeconds(3))// 10800


// // Converting hours to second 
// function minToSeconds(minutes){
//     seconds = minutes*60;
//     return seconds;
// }

// console.log(minToSeconds(30))//43200
// console.log(minToSeconds(8))//43200
// console.log(minToSeconds(3))// 10800


function footballPoints(wins, draws, losses){
    //Write Your solution Here

    total_points =wins*3+draws*1+losses*0;
    return total_points;
};


console.log(footballPoints(4, 3, 1)); // 15
console.log(footballPoints(10, 5, 0)); // 35
console.log(footballPoints(11, 0, 9)); // 33
