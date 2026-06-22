const removeButtons =
document.querySelectorAll(".wishlist-card button");


removeButtons.forEach(button=>{

button.addEventListener("click", function(){

button.parentElement.remove();

});

});