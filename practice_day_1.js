// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.
// Input:
// The first line of the input is the taka Harry’s mom gave him.
// The second line is the cost of 1 kg of oranges and 1 kg of apples.

var givenMoney = 1000;
var fruitsPrice = 700;
var getReturn = givenMoney-fruitsPrice;
console.log(getReturn);

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

var [Mathematics,Biology,Chemistry,Physics,Bangla] = [75.25, 65, 80, 35.45, 99.50];

var averageMark = (Mathematics+Biology+Chemistry+Physics+Bangla)/5;
console.log(averageMark.toFixed(2));

// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.
// Input:
// The first and the second lines of the input contain the strings.

var first_line = "I am going to be";
var second_line = "an awesome web developer";
var full_line = first_line+" "+second_line;
console.log(full_line);

// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.
// Input:
// The first line of the input contains the number.

var givenNumber = 119;
var remainderIs = givenNumber%5;
console.log(remainderIs);