var ans=document.querySelectorAll(".drum").length;

var i=0;
for(i=0;i<ans;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var buttoninnerhtml=this.innerHTML;
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);

       
    });
}


document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});



function makesound(parameter){
    switch(parameter){
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

    }
}

function buttonanimation(parameter){
    var x="." + parameter;
    document.querySelector(x).classList.add("pressed");

    setTimeout(function(){  
         document.querySelector(x).classList.remove("pressed") }, 
         100);
}

