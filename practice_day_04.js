// function practice 
function findPrice(totalAmount,unitPrice){
    var totalUnit = totalAmount/unitPrice;
    return totalUnit;
}

var totalProduct = findPrice(200,10);
console.log(totalProduct);