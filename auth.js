// Register validation

const registerForm = document.querySelector(".register-form");

if (registerForm) {

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const password =
document.querySelector("#password").value;

const confirmPassword =
document.querySelector("#confirm-password").value;

if(password !== confirmPassword){

alert("Passwords do not match");

return;

}

alert("Registration Successful");

});

}



// Login validation

const loginForm = document.querySelector(".login-form");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Login Successful");

});

}