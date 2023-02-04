const numbers = [5,2,1, 93,33,32,21,55,-20];
for (let i = 0; i< numbers.length; i++){
    if(numbers[i]<=0){
        break;
    }
    else{
        console.log(numbers[i]);
    }
}