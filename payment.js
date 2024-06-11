// declaration of variables for buying a ticket

let home1 = document.querySelector('.homepage1');
console.log(home1);
let btnBuy = document.querySelector('.btn-ticket');
console.log(btnBuy);
let buy = document.querySelector('.buy');
console.log(buy);
let more = document.getElementsByClassName('.more');
console.log(more);
let ticketNumber = document.getElementById("0")
console.log(0);
let order = document.getElementsByClassName(".order")
console.log(order);
let btn1 = document.getElementsByClassName(".btn1")
console.log(btn1);
let pay = document.getElementsByClassName(".pay")
console.log(pay);
let title = document.querySelector("h3");
console.log(title);
let settings = document.getElementsByClassName(".settings");
console.log(settings);
let back = document.getElementsByClassName(".cross")
console.log(back);
let crossT = document.getElementsByClassName(".crossT");
let btn2 = document.getElementsByClassName(".btn2");
let payment = document.getElementsByClassName(".payment");


//use function for display buy menu

more.addEventListener("click", function () {
    console.log('je suis dans la fonction');
    ticketNumber.textContent = '1';
    order.style.display = 'flex';
});

btn1.addEventListener("click", function () {
    console.log('je suis dans la fonction');
    buy.style.display = "none";
    pay.style.display = "block";
    title.textContent = 'Paiment';
    back.style.display = "none";
    crossT.textContent = "Acheter"
    
}); 

btn2.addEventListener("click", function () {
    console.log('je suis dans la fonction');
    payment.style.display = "block";
    pay.style.display = "none";
    title.textContent = 'Paiment';
    back.style.display = "block";
}); 

validate.addEventListener("click", function () {
    console.log('je suis dans la fonction');
    finish.style.display = "flex";
    payment.style.display = "none";
    title.textContent = 'Paiment';
    back.style.display = "none";
    crossT.textContent = "Acheter"
    
});
