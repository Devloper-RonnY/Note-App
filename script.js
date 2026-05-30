//   Requiremenets  -->
// to create new cards
// data store into local storage
// showcards from local storage
// handle buttons and filters

//  main section
let container = document.querySelector(".container");
let form = document.querySelector("form");
let formCard = document.querySelector(".form-card");
let categorybtn = document.querySelectorAll(".tag")
 
//   arrow up and down section
let addNote = document.querySelector(".plus");
let upbtn = document.querySelector(".up");
let downbtn = document.querySelector(".down");

//   create and close btn section
let submitbtn = document.querySelector(".create");
let closebtn = document.querySelector(".close");

//    input btn section
let imageinp = document.querySelector("#image-inp");
let nameinp = document.querySelector("#name-inp");
let homeinp = document.querySelector("#home-inp");
let purposeinp = document.querySelector("#purpose-inp");

//    error btn section
let errorhome = document.querySelector(".error-home");
let errorimg = document.querySelector(".error-image");
let errorname = document.querySelector(".error-name");
let errorpurpose = document.querySelector(".error-purpose ");

//  color category
let redbtn = document.querySelector(".red");
let orangebtn = document.querySelector(".orange");
let purplebtn = document.querySelector(".purple");
let graybtn = document.querySelector(".gray");



let selectedbtn = "";
categorybtn.forEach(function(cats){
    cats.addEventListener("click", function(){

        categorybtn.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });

        selectedbtn = cats.classList[1];

        cats.style.backgroundColor = selectedbtn;
        cats.style.color = "white";

    });
});


closebtn.addEventListener("click", function(){
    formCard.style.display = "none"
    container.style.display = "flex"
})

addNote.addEventListener("click", function(){
    formCard.style.display = "block"
    container.style.display = "none"
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    let imageUrl =  imageinp.value.trim();
    let nameUrl =  nameinp.value.trim();
    let homeUrl =  homeinp.value.trim();
    let purposeUrl =  purposeinp.value.trim();

        if(imageUrl === ""){
            errorimg.style.display = "block"
            errorimg.textContent = "Please fill "
            return;
        }
        if(nameUrl === ""){
            errorimg.style.display = "block"
            errorname.textContent = "Please fill "
            return;
        }
        if(homeUrl === ""){
            errorimg.style.display = "block"
            errorhome.textContent = "Please fill "
        }
        if(purposeUrl === ""){
            errorimg.style.display = "block"
            errorpurpose.textContent = "Please fill "
        }

        if(!selectedbtn){
            alert("please select button")
        }
});

