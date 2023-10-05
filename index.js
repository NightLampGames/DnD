

function hideEverything(){
    document.getElementById("wdMap").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("cMap").style.display = "none";
    document.getElementById("npcList").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("puska").style.display = "none";
    document.getElementById("perception").src = src="https://www.youtube.com/embed/ZjlYFWLUDBQ?si=w5U1Lg7lNcQUJIh7&amp;controls=0&amp;autoplay=0";
    document.getElementById("perception").style.display = "none";
}
function showMain(){
    hideEverything();
    document.getElementById("main").style.display = "block"
    document.querySelector(".navbar-collapse").classList.remove("show");
}
function showMemes(){
    hideEverything();
    console.log(document.getElementById("perception").Status);
    document.getElementById("perception").style.display = "block"
    document.getElementById("perception").src = src="https://www.youtube.com/embed/ZjlYFWLUDBQ?si=w5U1Lg7lNcQUJIh7&amp;controls=0&amp;autoplay=1"
    document.querySelector(".navbar-collapse").classList.remove("show");
    /*setTimeout(function (){
        document.getElementById("perception").src = src="https://www.youtube.com/embed/ZjlYFWLUDBQ?si=w5U1Lg7lNcQUJIh7&amp;controls=0&amp;autoplay=0";
        showMain();
    },111000);*/
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
function showTab(tab){
    for(let i=0; i<3;i++){
        document.getElementsByClassName("nav-link")[i].classList.remove("active");
        document.getElementsByClassName("tabs")[i].style.display="none";
    }
    
    //document.getElementsByClassName("tabs").style.display="none";
    document.getElementById("current").innerHTML=document.getElementById(tab).innerHTML;
    switch (tab) {
        case "action":
            document.getElementById("a").classList.add("active");
            break;
            case "else":
                document.getElementById("e").classList.add("active");
                break;
            
        default:
            document.getElementById("m").classList.add("active");
    }

}






