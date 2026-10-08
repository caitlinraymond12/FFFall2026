"use strict";

let allPlaces = document.querySelectorAll(".place");

console.log(allPlaces[0].innerText);
console.log(allPlaces[1].innerText);
console.log(allPlaces[2].innerText);

allPlaces[0].addEventListener("click", function(){
    document.getElementById("tabContent").innerHTML = "<h1>Big Ben</h1>";
});

allPlaces[1].addEventListener("click", function(){
    document.getElementById("tabContent").innerHTML = "<h1>Chloe</h1>";
});


allPlaces[2].addEventListener("click", function(){
    document.getElementById("tabContent").innerHTML = "<h1>Sushi</h1>";
});

allPlaces.forEach(button => {
    button.style.backgroundColor = "green";
    button.style.width = "100px";
    button.style.height = "50px";
});