"use strict"; 

let redClickBox = document.getElementById("redClick"); 


redClickBox.classList.add("clickBox"); 

redClickBox.addEventListener("copy", function() {
    document.querySelector("body").style.backgroundColor = "purple";
    document.querySelector("h1").innerText = "TEST";
});

redClickBox.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "blue";
    redClickBox.innerHTML = "<h2>Box clicked</h2>"
}); 

redClickBox.addEventListener("mouseover", function() {
    redClickBox.style.backgroundColor = "rgba(0, 128, 0, 1.0)"; // green with alpha

});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
});



