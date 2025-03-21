const creditBox = document.getElementById ("creditBox");

const visaBtn = document.getElementById ("visaBtn");
const masterBtn = document.getElementById ("masterBtn");
const paypalBtn = document.getElementById ("paypalBtn");


const result1 = document.getElementById ("result1");
const result2 = document.getElementById ("result2");


submitBtn.onclick = function(){
    if(creditBox.checked){
        result1.textContent="You chose Credit"
    }
    else{
        result1.textContent="You chose Debit"
    }

    if(visaBtn.checked){
        result2.textContent="You paying with Visa"
    }
    else if(masterBtn.checked){
        result2.textContent="You paying with Mastercard"
    }
    else if(paypalBtn.checked){
        result2.textContent="You paying with PayPal"
    }
    else{
        result2.textContent="You must select a payment type"
    }
}

