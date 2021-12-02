"use strict";

var compBtn = document.getElementsByClassName("button");
var screen1 = document.getElementById("screen1");
var screen2 = document.getElementById("screen2");
var title = document.getElementById('h1');
var userChoice = document.getElementById("user");
var Rock = document.getElementById("leadership");
var compChoice = document.getElementById("comp");
var images = document.querySelectorAll('img');
var obj = {
  leadership: "./assets/images/leadership.png"
};

function playWithComp() {
  console.log('clicked'); // console.log(screen1)

  screen1.style.display = "none";
  screen2.style.display = "flex";
  console.log(title);
  h1.innerText = "choose";
}

var RocksisClicked = function RocksisClicked() {
  userChoice.src = './assets/images/leadership.png';
};

var HandisClicked = function HandisClicked() {
  userChoice.src = './assets/images/hand.png';
};

var ScissorsisClicked = function ScissorsisClicked() {
  userChoice.src = './assets/images/scissors.png';
};

var startGame = function startGame() {
  min = Math.ceil(1);
  max = Math.floor(4);

  if (Math.floor(Math.random() * (max - min) + min) === 1) {
    compChoice.src = './assets/images/leadership.png';
  }

  if (Math.floor(Math.random() * (max - min) + min) === 2) {
    compChoice.src = './assets/images/hand.png';
  }

  if (Math.floor(Math.random() * (max - min) + min) === 3) {
    compChoice.src = './assets/images/scissors.png';
  }

  console.log(Math.floor(Math.random() * (max - min) + min));
};