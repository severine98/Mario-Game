


let block = document.getElementById('mario'); // GRAB MARIO
let modifier = 4; // HOW MANY PX DOES MARIO MOVE PER PRESS

// LEFT/RIGHT INITIAL POSITION OF MARIO
block.style.top = 0;
block.style.left = 0;


// FUNCTION TO MAKE MARIO MOVE USING KEYS

window.addEventListener("keydown", (event) => {
    const style = block.style;
    switch (event.key) {
        case 'ArrowUp':
            return style.top = `${parseInt(style.top) - modifier}px`;
        case 'ArrowDown':
            style.top = `${parseInt(style.top) + modifier}px`;
            break;
        case 'ArrowLeft':
            style.left = `${parseInt(style.left) - modifier}px`;
            break;
        case 'ArrowRight':
            style.left = `${parseInt(style.left) + modifier}px`;
            break;
    }
});

// GENERATE  COIN 

$(document).ready(function() {
    // get the width and height of the window
    var width = $(window).width();
    var height = $(window).height();
    // add 100 divs to the page
    for (var i = 0; i < 9; i++) {
        // the left position of the div should be at most the width of the
        // window minus the width of the div, so the div doesn't spill out
        // of the right side of the window.
        var left = Math.floor(Math.random() * (width-100));
        // the top position of the div should be at most the height of the
        // window minus the width of the div, so the div doesn't spill out
        // of the bottom of the window.
        var top = Math.floor(Math.random() * (height-100));
        // create a new div, append it to the body and set the top and
        // left positions in the CSS
        $("<div></div>").appendTo("body").css({
            left: left,
            top: top
        });
    }
});

// HOW TO COLLIDE




// Figure out how to jump 

//Figure out how when in contact with a 'coin', you score increases by 1