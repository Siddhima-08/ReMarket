const offerBtn =
document.querySelector(".offer-btn");


if(offerBtn){

offerBtn.addEventListener("click", function(){

const offer =
prompt("Enter your offer amount");

if(offer){

alert("Offer Sent : ₹" + offer);

}

});

}