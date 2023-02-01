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

// console.log(makeAvarage([1,2,4,3,5]));

// problem 4 

function odd_even(value){
    if(value%2 ==0){
        return "even";
    }
    else{
        return "odd";
    }
}

// console.log(odd_even(5));

function odd_evens(values){
    if(values%2 ==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

odd_evens(11);

