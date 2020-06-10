let marioElement = document.getElementById('mario'); // GRAB MARIO
let modifier = 20; // HOW MANY PX DOES MARIO MOVE PER PRESS
let score = 0;
let currentScore = document.getElementById('currentScore');
let bestTime = "";



// MARIO AND COINS OBJECTS

let mario = {
    top: 50,
    left: 50,
    right: 150,
    bottom: 150,
    width: 100,
    height: 100,
}


const coins = [];

const makeCoins = () => {
    for (i = 0; i < 10; i++) {

        let obj = {
            left: Math.floor(Math.random() * (window.innerWidth - 100)), //WHY 100??
            top: Math.floor(Math.random() * (600 - 100)),
            id: i,
        };
        coins.push(obj);
    };
}
makeCoins();

// TOP/LEFT INITIAL POSITION OF MARIO - GRABBING FROM DOM AND GIVING SIMPLER NAME
marioElement.style.top = mario.top;
marioElement.style.left = mario.left;

// FUNCTION TO MAKE MARIO MOVE USING KEYS
const marioStyle = mario.style;
window.addEventListener("keydown", (event) => {
    marioCollidesCoin();

    switch (event.key) {
        case 'ArrowUp':
            if (marioOutOfBorderTop()) {
                return; //If Mario is out of top of border, exit the function. Because if IF statement is truthy, code block operates
            };
            mario.top -= modifier;
            mario.bottom -= modifier;  //USING TOP TO CONTROL
            marioElement.style.top = mario.top; // UPDATE MARIO POSITION
            break;
        case 'ArrowDown':
            if (marioOutOfBorderBottom()) {
                return; // If Mario is out of bottom of border, exit the function. Because if IF statement is truthy, code block operates
            };
            mario.top += modifier;
            mario.bottom += modifier;
            marioElement.style.top = mario.top;
            break;
        case 'ArrowLeft':
            if (marioOutOfBorderLeft()) {
                return; // If Mario is out of left of border, exit the function. Because if IF statement is truthy, code block operates
            };
            mario.left -= modifier;
            mario.right -= modifier;
            marioElement.style.left = mario.left;
            break;
        case 'ArrowRight':
            if (marioOutOfBorderRight()) {
                return; // If Mario is out of left of border, exit the function. Because if IF statement is truthy, code block operates
            };
            mario.left += modifier;
            mario.right += modifier;
            marioElement.style.left = mario.left;
            break;
    }
});

// MARIO STOPS MOVING WHEN AT BORDER OF WINDOW 
const marioOutOfBorderTop = () => {
    if (mario.top < 8) { // 8 BECAUSE WIDTH OF BORDER
        return true;
    }
};

const marioOutOfBorderLeft = () => {
    if (mario.left < 8) {
        return true;
    }
};

const marioOutOfBorderRight = () => {
    if (mario.left > (window.innerWidth - 108)) { //wINDOW INNER WIDTH - MARIO WIDTH (NEED TO ADD BORDER WIDTH)
        return true;
    }
};

const marioOutOfBorderBottom = () => {
    if (mario.top > (592 - mario.height)) {   // height of section - height of mario - height of border
        return true;
    }
};



// GENERATE  COIN 
// THIS FUNCTION CREATES 10 NEW COINS WITH RANDOM COORDINATES

const generateCoin = () => {
    for (var i = 0; i < coins.length; i++) {

        $(`<img src="./coin.png" alt="coin" id=${coins[i].id} class="coin">`).appendTo("#border").css({
            left: coins[i].left,
            top: coins[i].top
        });
    }
}

// COIN NEEDS TO BE PRESENT WHEN BROWSER LOADS

window.onload = generateCoin;


// COIN COLLISION

const marioCollidesCoin = () => {

    //let soundUrl = "";
    for (var i = 0; i < coins.length; i++) {
        let coinBrowser = document.getElementById(coins[i].id); //Grabs coin from the DOM using id from coin obj
        if (typeof (coinBrowser) === 'undefined' || coinBrowser === null) { // IF COIN IS NOT THERE, RETURN FUNCTION - NOTHIING TO REMOVE
            continue; //
        };

        if (coins[i].left > mario.left && coins[i].left < mario.right && coins[i].top > mario.top && coins[i].top < mario.bottom) {
            coinBrowser.remove(); // IF MARIO COORDINATES ALL MATCH THE COIN, REMOVE THE COIN
            score += 1;
            currentScore.innerHTML = score;
            const soundUrl = "./coin-sound.mp3";
            new Audio(soundUrl).play();
            // coins[i].left = Math.floor(Math.random() * (window.innerWidth - 100)); // GIVE NEW POSITION
            //coins[i].top = Math.floor(Math.random() * (600 - 100));

            allCoinsCollected();
        }
    };
}









// WHEN COIN DISAPEARS, NEW RANDOM COIN NEEDS TO BE GENERATED

// NEED TO CREATE AN ARRAY OF IDS TO GET MULTIPLE COIN?

// COIN SOUND WHENEVER MARIO GETS A COIN

// EACH ARROW KEY MOVEMENT CHANGES MARIO PIC

//Figure out how when in contact with a 'coin', you score increases by 1

// CREATE DIFFERENT FILES FOR CLASSES AND IMPORT 

// TIMER

let h1 = document.getElementsByTagName('h1')[0];
let span = document.getElementsByTagName('span')[1];
let seconds = 0;
let minutes = 0;
let hours = 0;

const add = () => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

let timer = () => {
    t = setTimeout(add, 1000);
}
timer();

const allCoinsCollected = () => {
    if (score === 10) {
        // take time from DOM 


        // store it in variable bestTime
        let newTime = h1.textContent;
        // Print onto DOM

        if (newTime < bestTime || bestTime === "") {
            bestTime = newTime;
        
            span.innerHTML = newTime;
        }
        //Reset coin score
        score = 0;
        currentScore.innerHTML = score;

        // reset timer 
        h1.innerHTML = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;

        //generate new coins
        generateCoin();

    }
}


//Create function when newBesTime is better than bestTimes, it overrites DOM best time

// ADD A WINDOW THAT SAYS 'You will need a keyboard to play!' WHEN SCREEN SIZE IS TOO SMALL
// ADD A RESTART 
// WHEN ALL COINS ARE COLLECTED, GENERATE NEW COINS AND UPDATE BEST TIME IF BETTER
// NEED TO GET COLLISION WITH COINS MORE PRECISE 
// NEED TO GET COINS NOT TOO CLOSE TO BORDER??