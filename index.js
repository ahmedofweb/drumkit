let drums = document.querySelectorAll(".drum")

drums.forEach((drum) => {
    drum.addEventListener("click", () => {
       playAudio(drum.textContent)
       animate(drum)
    })
})

// klaviatura orqali ishlashi
document.body.addEventListener("keypress", (e) => {
    drums.forEach((drum) => {
        if(drum.textContent == e.key) {
            animate(drum);
        }
    })
    playAudio(e.key)   
})


// Audio 
function playAudio(id) {
    let sound;
    switch(id){
        case 'w':
            sound = new Audio("./sounds/crash.mp3")
            break;
        case 'a':
            sound = new Audio("./sounds/kick-bass.mp3")
            break;  
        case 's':
            sound = new Audio("./sounds/snare.mp3")
            break;
        case 'd':
            sound = new Audio("./sounds/tom-1.mp3")
            break;
        case 'j':
            sound = new Audio("./sounds/tom-2.mp3")
            break;
        case 'k':
            sound = new Audio("./sounds/tom-3.mp3")
            break;
        case 'l':
            sound = new Audio("./sounds/tom-4.mp3")
            break;              
    }
    sound.play();
}


// Animation
function animate(item) {
    item.classList.add("pressed")
       setTimeout(() => {
        item.classList.remove("pressed")
       }, 100)
}