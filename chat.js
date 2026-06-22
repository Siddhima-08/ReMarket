const sendBtn =
document.querySelector(".chat-input button");

const input =
document.querySelector(".chat-input input");

const chatBox =
document.querySelector(".chat-box");


if(sendBtn){

sendBtn.addEventListener("click", function(){

if(input.value === "") return;

const message =
document.createElement("div");

message.classList.add("message");

message.classList.add("buyer");

message.innerText = input.value;

chatBox.appendChild(message);

input.value="";

});

}