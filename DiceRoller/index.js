
function randomNumber() {
  var randomNumberDice = Math.random() * 6;
  randomNumberDice = Math.floor(randomNumberDice); //this will give random
  return randomNumberDice;
}

function changeDiceImage() {
  let diceImages = ["Images/dice1.png","Images/dice2.png","Images/dice3.png", "Images/dice4.png", "Images/dice5.png","Images/dice6.png"];
  var playerDiceImages = [diceImages[randomNumber()-1], diceImages[randomNumber()-1]]
  var numb = randomNumber();
  return diceImages[numb-1];

}

let diceImages = ["Images/dice1.png","Images/dice2.png","Images/dice3.png", "Images/dice4.png", "Images/dice5.png","Images/dice6.png"];

player1Number = randomNumber();
player2Number = randomNumber();

// location of first img on DOM
// document.body.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild.src = diceImages[player1Number];
// document.body.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.lastElementChild.firstElementChild.src = diceImages[player2Number];

var player1Image = document.querySelectorAll("img")[0];
var player2Image = document.querySelectorAll("img")[1];

player1Image.setAttribute("src", diceImages[player1Number])
player2Image.setAttribute("src", diceImages[player2Number])

if (player1Number > player2Number) {

  document.body.firstElementChild.innerText = "Player 1 Wins";

}
else if(player1Number < player2Number) {

  document.body.firstElementChild.innerText = "Player 2 Wins";
}
else {

  document.body.firstElementChild.innerText = "Tie";
}
