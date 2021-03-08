function randomDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;


    var randomDiceSource = "images/dice" + randomNumber + ".png";

    return randomDiceSource

}

var dice1 = randomDice()

var dice2 = randomDice()

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if (dice1 > dice2) {

    document.querySelector("h1").innerHTML = ("Player 1 Wins");

} else if (dice1 < dice2) {

    document.querySelector("h1").innerHTML = ("Player 2 Wins");

} else {
    document.querySelector("h1").innerHTML = "Draw";

}