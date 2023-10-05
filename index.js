

function hideEverything(){
    document.getElementById("wdMap").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("cMap").style.display = "none";
    document.getElementById("npcList").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("puska").style.display = "none";
    document.getElementById("perception").style.display = "none";
}
function showMain(){
    hideEverything();
    document.getElementById("main").style.display = "block"
    document.querySelector(".navbar-collapse").classList.remove("show");
}
function showMemes(){
    hideEverything();
    document.getElementById("perception").style.display = "block"
    document.getElementById("perception").src = src="https://www.youtube.com/embed/ZjlYFWLUDBQ?si=w5U1Lg7lNcQUJIh7&amp;controls=0&amp;autoplay=1"
    document.querySelector(".navbar-collapse").classList.remove("show");
    setTimeout(function (){
        document.getElementById("perception").src = src="https://www.youtube.com/embed/ZjlYFWLUDBQ?si=w5U1Lg7lNcQUJIh7&amp;controls=0&amp;autoplay=0";
        showMain();
    },111000);
}
function showCards(){
    hideEverything();
    document.getElementById("cards").style.display = "block"
    document.querySelector(".navbar-collapse").classList.remove("show");
}
function showPuska(){
    hideEverything();
    document.getElementById("puska").style.display = "block"
    document.querySelector(".navbar-collapse").classList.remove("show");
}
function showMapW(){
    hideEverything();
    document.getElementById("wdMap").style.display = "block"
    document.querySelector(".navbar-collapse").classList.remove("show");
}
function showMapC(){
    hideEverything();
    document.getElementById("cMap").style.display = "block"
    document.querySelector(".navbar-collapse").classList.remove("show");
}
function showNpc(){
   hideEverything(); 
    document.getElementById("npcList").style.display = "block";
    document.querySelector(".navbar-collapse").classList.remove("show");
   
}
addEventListener("click",function(event){
    console.log()
})
addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
           
        default:
            console.log(this);
            break;
    }
}
function buttonAnimation(key){
    var activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");
    setTimeout(() => { activeBtn.classList.remove("pressed"); }, 100);
}






