// Multi layer discount calculator

/*
first 100 ticket price per piece ---- 100tk
101-200 tickets price per piece ------90tk
more than 200 tickets price per piece ----70tk

 */

function ticketPrice(totalTicket){
    let totalTicketCost = 0;

    if(totalTicket<=100){
        totalTicketCost = totalTicket*100;
    }
    else if(totalTicket>100 && totalTicket <=200){
        totalTicketCost = ((totalTicket-100)*90)+(100*100);
    }
    else{
        totalTicketCost = ((100*100)+(100*90)+(totalTicket-200)*70);
    }

    return totalTicketCost;

}

const totalPrice = ticketPrice(10);
// console.log(totalPrice);

// console.log((100*100)+(100*90)+(100*70));

//  making pyramid with javascript function and loop;

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += "0";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);