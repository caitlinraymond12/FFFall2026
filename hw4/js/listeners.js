"use strict"; 

let springRecipe = document.getElementById("spring");

let summerRecipe = document.getElementById("summer");

let fallRecipe = document.getElementById("fall");

let winterRecipe = document.getElementById("winter");

springRecipe.classList.add("fadeout"); 

summerRecipe.classList.add("fadeout"); 

fallRecipe.classList.add("fadeout"); 

winterRecipe.classList.add("fadeout"); 

springRecipe.addEventListener("mouseover", function() {
    springRecipe.style.backgroundColor = "rgb(110, 194, 110)";
})

springRecipe.addEventListener("mouseout", function() {
    springRecipe.style.backgroundColor = "var(--primary)";
    springRecipe.style.color = "var(--opposite-font)";
})

summerRecipe.addEventListener("mouseover", function() {
    summerRecipe.style.backgroundColor = "rgb(255, 248, 51)";
    summerRecipe.style.color = "black";
})

summerRecipe.addEventListener("mouseout", function() {
    summerRecipe.style.backgroundColor = "var(--primary)";
    summerRecipe.style.color = "var(--opposite-font)";
})


fallRecipe.addEventListener("mouseover", function() {
    fallRecipe.style.backgroundColor = "rgb(230, 130, 71)";
})

fallRecipe.addEventListener("mouseout", function() {
    fallRecipe.style.backgroundColor = "var(--primary)";
    fallRecipe.style.color = "var(--opposite-font)";
})


winterRecipe.addEventListener("mouseover", function() {
    winterRecipe.style.backgroundColor = "rgb(145, 246, 246)";
    winterRecipe.style.color = "black";
})

winterRecipe.addEventListener("mouseout", function() {
    winterRecipe.style.backgroundColor = "var(--primary)";
    winterRecipe.style.color = "var(--opposite-font)";
})


let light = document.getElementById("light");

let dark = document.getElementById("dark");

light.classList.add("light"); 

dark.classList.add("dark"); 

light.addEventListener("click", function() {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
})

dark.addEventListener("click", function() {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
})







