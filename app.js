// DECLARE VARIABLES
//const mario = document.getElementsByTagName('div');

let block = document.getElementById('mario');
let modifier = 4;
console.log(block);
// Need to figure out how to get person to move left and right of screen using 
//keyboad arrows and can't get out of the body
block.style.top = 0;
block.style.left = 0;


window.addEventListener("keydown", (event) => {
    const style = block.style;
    switch(event.key) {
        case 'ArrowUp' : 
        return style.top = `${parseInt(style.top) - modifier}px`;
        case 'ArrowDown' : 
        style.top = `${parseInt(style.top) + modifier}px`;
        break;
        case 'ArrowLeft' : 
        style.left = `${parseInt(style.left) - modifier}px`;
        break;
        case 'ArrowRight' : 
        style.left = `${parseInt(style.left) + modifier}px`;
        break;
    }

});




// Figure out how to jump 

//Figure out how when in contact with a 'coin', you score increases by 1