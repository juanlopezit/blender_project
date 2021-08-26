let blenderState = "off";
let blender = document.getElementById("blender");
let blenderSound = document.getElementById("blender-sound")
let blenderButton = document.getElementById("blender-button-sound")


function controlBlender(){
    if (blenderState == "off"){
        blenderState = "on";
        activateSound();
        blender.classList.add("active");  
        console.log("you turn me on!");
    } else{
        blenderState = "off";
        activateSound();
        blender.classList.remove("active"); 
        console.log("you turn me off!");
    }
}

function activateSound(){
    if(blenderSound.paused){      
        blenderButton.play();
        blenderSound.play();
    } else{
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0   
    }
}