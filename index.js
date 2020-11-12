// Array of button elements.
var drumButtons = document.querySelectorAll(".drum");

// Add click event listener to all buttons.
for(var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

// Click function.
function handleClick() {
    // Button that was clicked.
    var button = this;

    makeSound(button.innerHTML);
    
    buttonAnimation(button.innerHTML);
}

function makeSound(key) {
    switch(key) {
        case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        
        case "a": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "s": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "d": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        
        case "j": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        
        case "k": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        
        case "l": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default: console.log(key);
    }
}

function buttonAnimation(key) {
    var pressedKey = document.querySelector("." + key);

    pressedKey.classList.toggle("pressed");

    setTimeout(function() {
        pressedKey.classList.toggle("pressed");
    }, 100);
}