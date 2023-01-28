// finding the largest number on a array

const numbers = [100,22,34,333,1000];
const maxNum = [0];
for (i=0;i<numbers.length;i++){
    if(numbers[i]>maxNum[0]){
        maxNum.pop();
        maxNum.push(numbers[i]);
    }
    
}

console.log(maxNum);

