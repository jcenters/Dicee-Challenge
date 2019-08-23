var randomNumber1 = diceRoll();
var randomNumber2 = diceRoll();
var firstDiceImage = "images/" + "dice" + randomNumber1 + ".png";
var secondDiceImage = "images/" + "dice" + randomNumber2 + ".png";


document.getElementsByTagName("img")[0].setAttribute("src", firstDiceImage);
document.getElementsByTagName("img")[1].setAttribute("src", secondDiceImage);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerText = "Draw!";
}

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}