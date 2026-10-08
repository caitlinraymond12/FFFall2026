"use strict"; 

let components = {breakfast: null, attraction: null, museum: null, show: null};

let breakfastSelect = false;
let attractionSelect = false;
let museumSelect = false;
let showSelect = false;

let toast = document.getElementById("toast"); 
let bagel = document.getElementById("bagel"); 
let smoothie = document.getElementById("smoothie"); 

let breakfast = document.getElementById("breakfast-selection"); 

toast.addEventListener("click", function() {
    toast.style.backgroundColor = "var(--light-accent-click)";
    bagel.style.backgroundColor = "var(--light-accent)";
    smoothie.style.backgroundColor = "var(--light-accent)";
    components.breakfast = "Avocado Toast";
    breakfast.innerText = "Breakfast: " + components.breakfast;
    breakfast.style.borderColor = "green";
    breakfastSelect = true;
    dayDescription();
    
});

bagel.addEventListener("click", function() {
    toast.style.backgroundColor = "var(--light-accent)";
    bagel.style.backgroundColor = "var(--light-accent-click)";
    smoothie.style.backgroundColor = "var(--light-accent)";
    components.breakfast = "New York Bagel";
    breakfast.innerText = "Breakfast: " + components.breakfast;
    breakfastSelect = true;
    breakfast.style.borderColor = "green";
    dayDescription();
    components.breakfast = "Bagel";
});

smoothie.addEventListener("click", function() {
    toast.style.backgroundColor = "var(--light-accent)";
    bagel.style.backgroundColor = "var(--light-accent)";
    smoothie.style.backgroundColor = "var(--light-accent-click)";
    components.breakfast = "Smoothie";
    breakfast.innerText = "Breakfast: " + components.breakfast;
    breakfastSelect = true;
    breakfast.style.borderColor = "green";
    dayDescription();
});



let bridge = document.getElementById("bridge"); 
let liberty = document.getElementById("liberty"); 
let square = document.getElementById("square"); 
let park = document.getElementById("park"); 

let activity = document.getElementById("attraction-selection"); 

bridge.addEventListener("click", function() {
    bridge.style.backgroundColor = "var(--light-accent-click)";
    liberty.style.backgroundColor = "var(--light-accent)";
    square.style.backgroundColor = "var(--light-accent)";
    park.style.backgroundColor = "var(--light-accent)";
    components.attraction = "Brooklyn Bridge";
    activity.innerText = "Tourist Attraction: " + components.attraction;
    activity.style.borderColor = "green";
    attractionSelect = true;
    dayDescription();
});

liberty.addEventListener("click", function() {
    bridge.style.backgroundColor = "var(--light-accent)";
    liberty.style.backgroundColor = "var(--light-accent-click)";
    square.style.backgroundColor = "var(--light-accent)";
    park.style.backgroundColor = "var(--light-accent)";
    components.attraction = "Statue of Liberty";
    activity.innerText = "Tourist Attraction: " + components.attraction;
    activity.style.borderColor = "green";
    attractionSelect = true;
    dayDescription();
});

square.addEventListener("click", function() {
    bridge.style.backgroundColor = "var(--light-accent)";
    liberty.style.backgroundColor = "var(--light-accent)";
    square.style.backgroundColor = "var(--light-accent-click)";
    park.style.backgroundColor = "var(--light-accent)";
    components.attraction = "Times Square";
    activity.innerText = "Tourist Attraction: " + components.attraction;
    activity.style.borderColor = "green";
    attractionSelect = true;
    dayDescription();
});

park.addEventListener("click", function() {
    bridge.style.backgroundColor = "var(--light-accent)";
    liberty.style.backgroundColor = "var(--light-accent)";
    square.style.backgroundColor = "var(--light-accent)";
    park.style.backgroundColor = "var(--light-accent-click)";
    components.attraction = "Central Park";
    activity.innerText = "Tourist Attraction: " + components.attraction;
    activity.style.borderColor = "green";
    attractionSelect = true;
    dayDescription();
});

let allImages = document.querySelectorAll(".attraction-item");



let currentImg = 0;
let size = allImages.length - 1;

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



let museum = document.getElementById("museum"); 
let show = document.getElementById("show"); 
let activities = document.getElementById("activities");

let selectedMuseum = null;
let selectedShow = null;

let museumSelection = document.getElementById("museum-selection"); 
let showSelection = document.getElementById("show-selection"); 

museum.addEventListener("click", function() {
    document.getElementById("activities").innerHTML = `
                <div class="activity museum-option" id="met">
                    <img src="images/met.jpg" alt="The Met">
                    <div>
                        <h4>The Met</h4>
                        <p>The Metropolitan Museum of Art is one of New York City's most famous museums, featuring an enormous collection of artwork and artifacts from around the world. Spend the afternoon exploring galleries filled with paintings, sculptures, ancient artifacts, and more.</p>
                    </div>
                    
                </div>
                <div class="activity museum-option" id="moma">
                    <img src="images/moma.jpg" alt="The Moma">
                    <div>
                        <h4>Muesum of Modern Art</h4>
                        <p>The Museum of Modern Art, known as MoMA, is home to an impressive collection of modern and contemporary artwork. Explore famous paintings, photography, sculptures, and other creative works from some of the most influential artists of the modern era.</p>
                    </div>
                </div>
                <div class="activity museum-option" id="history">
                    <img src="images/history.jpg" alt="Natural History Musuem">
                    <div>
                        <h4>American Museum of Natural History</h4>
                        <p>The American Museum of Natural History takes you on a journey through the natural world. Discover dinosaur fossils, fascinating exhibits about space and the Earth, and displays showcasing animals and cultures from around the globe.</p>
                    </div>
                </div>
                `;
    document.getElementById(selectedMuseum).classList.add("selected");
});

show.addEventListener("click", function() {
    document.getElementById("activities").innerHTML = `
                <div class="activity show-option" id="ballet">
                    <img src="images/ballet.jpg" alt="Ballerina">
                    <div>
                        <h4>New York City Ballet</h4>
                        <p>Enjoy an evening performance by the New York City Ballet and experience the elegance of live dance. Sit back and watch talented dancers perform beautifully choreographed pieces accompanied by music and impressive stage design.</p>
                    </div>
                    
                </div>
                <div class="activity show-option" id="concert">
                    <img src="images/concert.jpg" alt="Concert">
                    <div>
                        <h4>A Concert at Madison Square Garden</h4>
                        <p>Spend your evening listening to live music at Madison Square Garden, one of New York City's most famous entertainment venues. Enjoy the energy of a large concert and experience the excitement of seeing your favorite artist perform live.</p>
                    </div>
                </div>
                <div class="activity show-option" id="musical">
                    <img src="images/broadway.jpg" alt="Broadway">
                    <div>
                        <h4>A Broadway Musical</h4>
                        <p>End your day with a Broadway musical in the heart of Manhattan. From spectacular sets and costumes to talented performers and memorable songs, a Broadway show is a classic New York City experience.</p>
                    </div>
                </div>
                `;
    document.getElementById(selectedShow).classList.add("selected");
});


activities.addEventListener("click", function(event){
    let clickedActivity = event.target.closest(".activity");

    if(clickedActivity.classList.contains("museum-option")){
        museumSelect = true;
        selectedMuseum = clickedActivity.id;
        let museums = document.querySelectorAll(".museum-option");
        museums.forEach(function(museum){
            museum.classList.remove("selected");
        })
        components.museum = clickedActivity.querySelector("h4").innerText;
        museumSelection.innerText = "Museum: " + components.museum;
        museumSelection.style.borderColor = "green";
        dayDescription();
    }

    if(clickedActivity.classList.contains("show-option")){
        showSelect = true;
        selectedShow = clickedActivity.id;
        let shows = document.querySelectorAll(".show-option");
        shows.forEach(function(show){
            show.classList.remove("selected");
        })
        components.show = clickedActivity.querySelector("h4").innerText;
        showSelection.innerText = "Show: " + components.show;
        showSelection.style.borderColor = "green";
        dayDescription();
        
    }

    clickedActivity.classList.add("selected");
});


let description = document.getElementById("day-description"); 

function dayDescription(){
    if (!(breakfastSelect && attractionSelect && museumSelect && showSelect)) {
        description.innerHTML = `
            <p id="day-description">Please fill out all of the required sections.</p>
        `
    }
    else {
    description.innerHTML = 
        "You start off your day with a classic <strong>" + components.breakfast + 
        "</strong> for breakfast. From there, you head to the famous <strong>" + components.attraction + 
        "</strong> to check out what you've always seen in the movies. After that, you want to check out one of New York's famous museums, and you finally settle on the <strong>" + components.museum + 
        "</strong>. You spend 4 hours just looking around! After that, you decide to head to <strong>" + components.show + 
        "</strong> to catch an evening show. After a long day, you return to your hotel and fall right asleep after the perfect day in the city.";
        }
};