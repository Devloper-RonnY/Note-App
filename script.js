//   Requiremenets  -->
// to create new cards
// data store into local storage
// showcards from local storage
// handle buttons and filters

let container = document.querySelector(".container");
let form = document.querySelector(".form-card");

let addNote = document.querySelector(".plus");
let upbtn = document.querySelector(".up");
let downbtn = document.querySelector(".down");
let submitbtn = document.querySelector(".create");
let closebtn = document.querySelector(".close");

closebtn.addEventListener("click", function(){
    form.style.display = "none"
    container.style.display = "flex"
})

addNote.addEventListener("click", function(){
    form.style.display = "block"
    container.style.display = "none"
})

submitbtn.addEventListener("submit", function(dets){
    dets.preventDefault();
    
})
