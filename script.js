let container = document.querySelector(".container");
let form = document.querySelector(".form-card");

let plusbtn = document.querySelector(".plus");
let upbtn = document.querySelector(".up");
let downbtn = document.querySelector(".down");
let createbtn = document.querySelector(".create");
let closebtn = document.querySelector(".close");

closebtn.addEventListener("click", function(){
    form.style.display = "none"
    container.style.display = "flex"
})

plusbtn.addEventListener("click", function(){
    form.style.display = "block"
    container.style.display = "none"
})
