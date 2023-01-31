// function practice 
function bar(){
    console.log("foo");
}

function foo(){
    console.log("bar");
    bar();
}

// foo();

// problem 2 

function make_avg(num1,num2,num3){
    var avarage = (num1+num2+num3)/3;
    return avarage;
}

var grade = make_avg(23,11,26);
// console.log(grade);

// problem 3 

function makeAvarage(numbers){
    var totalNumber = 0;
    var lenthOfArray = numbers.length;

    for (i=0;i<lenthOfArray; i++){
        var totalNumber = totalNumber+numbers[i];
        var avarage = totalNumber/lenthOfArray;
        
    }
    return [lenthOfArray , avarage];
}

var lengthOfNumber = makeAvarage([1,2,4,3,5]);
var avg =  makeAvarage([1,2,4,3,5]);
console.log(makeAvarage([1,2,4,3,5]));