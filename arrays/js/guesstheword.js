"use strict";

let textInput = document.getElementById("myText");
let inputButton = document.getElementById("myButton");
let incorrect = document.getElementById("incorrect");
let output = document.getElementsByClassName("output");

let letters = ['i', 'b', 'i', 's'];

inputButton.addEventListener("click", function(){

    let found = false;
    for(let i = 0; i < letters.length; i++){
        if(textInput.value == letters[i]){
            output[i].innerHTML = textInput.value;
            found = true;
        }
    }

    if(found == false){
        incorrect.innerHTML = "Incorrect Guess. Try Again."
        setTimeout(function(){
            incorrect.innerHTML = "";
        }, 2000);
    }

});