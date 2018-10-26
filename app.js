// Play drum by keyboard press
function playSound(event) {
    let code;
    if (event.keyCode){
        code=event.keyCode;
    } else{
        code = this.getAttribute('data-key');
    }
    const box = document.querySelector(`.box[data-key="${code}"]`);
    const sound = document.querySelector(`audio[data-key="${code}"]`);
    if(!sound){return};
    
    sound.currentTime = 0;
    sound.play();
    box.classList.add("noise");
}

function stopSound(event){
    let code;
    if (event.keyCode){
        code=event.keyCode;
    } else{
        code = this.getAttribute('data-key');
    }
    const box = document.querySelector(`.box[data-key="${code}"]`)
    if(!box){return};
    box.classList.remove('noise');
}
  
window.addEventListener("keydown", playSound);
 
// Play music by mouse click

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('click',playSound));
boxes.forEach(box=> box.addEventListener('transitionend',stopSound));



