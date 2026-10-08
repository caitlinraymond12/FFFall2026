"use strict";

let allImages = document.querySelectorAll(".images");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let currentImg = 0;
let size = allImages.length - 1;
console.log(size);

allImages[currentImg].style.display = "block";

function nextImage(){
    allImages[currentImg].style.display = "none";
    currentImg+=1;
    if(currentImg > size){
        currentImg = 0;
    }    
    allImages[currentImg].style.display = "block";
}

function prevImage(){
    allImages[currentImg].style.display = "none";
    currentImg-=1;
    if(currentImg < 0){
        currentImg = size;
    }    
    allImages[currentImg].style.display = "block";
}

next.addEventListener("click", nextImage);

prev.addEventListener("click", prevImage);
