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

let fillText = document.getElementById("review-text");

let review1 = document.getElementById("r1");
let review2 = document.getElementById("r2");
let review3 = document.getElementById("r3");

review1.style.backgroundColor = "var(--dark-accent)"
review2.style.backgroundColor = "var(--light-accent)"
review3.style.backgroundColor = "var(--light-accent)" 

review1.addEventListener("click", function(){
    fillText.innerText = "This product is the BEST! I've been using it every single morning for 3 months now. I'm a huge coffee lover, so it has been amazing for me to discover new recipes and try flavor combinations I have never considered before. Couldn't recommend it enough. -Maria. Miami, FL";
    review1.style.backgroundColor = "var(--dark-accent)"
    review2.style.backgroundColor = "var(--light-accent)"
    review3.style.backgroundColor = "var(--light-accent)"    
})

review2.addEventListener("click", function(){
    fillText.innerText = "I absolutely love this product. I've been wanting to get more into coffee and all the different types, but I never knew where to start! This product has inspired me to branch out beyond my basic iced coffee and learn how to make macchiatos, cappuccinos, and lattes. I've become the barista of my friend group. -Chloe. New York, NY";
    review1.style.backgroundColor = "var(--light-accent)"
    review2.style.backgroundColor = "var(--dark-accent)"
    review3.style.backgroundColor = "var(--light-accent)"  
})

review3.addEventListener("click", function(){
    fillText.innerText = "My favorite part of this product is the themed drinks. I love seeing how my morning coffee changes with the seasons. It gives me something to constantly look forward too, and I get excited every Monday morning to flip the page and reveal a brand new recipe for me to try! -Ivy. Knoxville, TN";
    review1.style.backgroundColor = "var(--light-accent)"
    review2.style.backgroundColor = "var(--light-accent)"
    review3.style.backgroundColor = "var(--dark-accent)"  
})