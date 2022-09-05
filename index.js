var head = document.firstElementChild.firstElementChild;
var body = document.firstElementChild.lastElementChild;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var header = document.querySelector("#title .header h1");

var onePlayed = false;
var twoPlayed = false;

function rollDice(player) {
    if (player === 1) {
        document.getElementById("img1").src = ("images/dice" + randomNumber1 + ".png");
        onePlayed = true;
    }
    if (player === 2) {
        document.getElementById("img2").src = ("images/dice" + randomNumber2 + ".png");
        twoPlayed = true;
    }

    if (onePlayed && twoPlayed) {
        if (randomNumber1 > randomNumber2) {
            header.innerHTML = ("Player 1 Wins!");
        }
        else if (randomNumber1 < randomNumber2) {
            header.innerHTML = ("Player 2 Wins!");
        }
        else {
            header.innerHTML = ("Draw!");
        }
    }
}



