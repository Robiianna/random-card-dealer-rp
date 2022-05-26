/* eslint-disable */
import "bootstrap";
import "./style.css";
var topSuit = document.querySelector(".top-suit");
var bottomSuit = document.querySelector(".bottom-suit");
var number = document.querySelector(".number");
var suits = ["♦", "♥", "♠", "♣"];
var randomSuit = Math.floor(Math.random() * suits.length);
var numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
var randomNumber = Math.floor(Math.random() * numbers.length);
numbers[randomNumber];
function generateCard() {
  let suit = suits[randomSuit];
  console.log(suit);
  topSuit.innerHTML = suit;
  bottomSuit.innerHTML = suit;
  let numberCard = numbers[randomNumber];
  console.log(number);
  number.innerHTML = numberCard;

  //identificar con la pinta que se está trabajando - hacer condicional
  if (suit == "♦" || suit == "♥") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
    document.querySelector(".number").style.color = "red";
  }
  //asignarle una clase nueva
}

window.onload = function() {
  //write your code here
  generateCard();
};

// ♦ ♥ ♠ ♣
