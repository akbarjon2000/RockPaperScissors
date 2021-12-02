"use strict";

var compBtn = document.getElementsByClassName("button");
var screen1 = document.getElementById("screen1");
var screen2 = document.getElementById("screen2");
var title = document.getElementById('h1');
var userChoice = document.getElementById("user");
var Rock = document.getElementById("leadership");
var compChoice = document.getElementById("comp");
var images = document.querySelectorAll('img');
var btnaudio = document.getElementById('btnaudio');
var spinner = document.getElementById('spinner');
var timer = document.getElementById('timer');
var win = document.getElementById('win');
var lost = document.getElementById('lost');
var rock = document.getElementById('rock');
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var userInterface = document.getElementById("userInterface");
var li = document.createElement("li");
var ol = document.getElementById("list");
var obj = {
  rock: "./assets/images/leadership.png",
  paper: "./assets/images/hand.png",
  scissors: "./assets/images/scissors.png",
  question: "./assets/images/question-mark.png"
};
var historyArr = [];

function playWithComp() {
  console.log('clicked');
  screen1.style.display = "none";
  screen2.style.display = "flex";
  btnaudio.play();
}

localStorage.setItem("gameHistory", JSON.stringify(historyArr));
var elements = JSON.parse(localStorage.getItem("gameHistory") || "[]");
console.log(elements);
var activate = 0;

var RocksisClicked = function RocksisClicked() {
  userChoice.src = obj.rock;
  activate = 1;
  console.log(activate);
  rock.play();
};

var HandisClicked = function HandisClicked() {
  userChoice.src = obj.paper;
  activate = 2;
  console.log(activate);
  paper.play();
};

var ScissorsisClicked = function ScissorsisClicked() {
  userChoice.src = obj.scissors;
  activate = 3;
  console.log(activate);
  scissors.play();
};

function startGame() {
  min = Math.ceil(1);
  max = Math.floor(4);
  var res = Math.floor(Math.random() * (max - min) + min);

  if (res === 1) {
    compChoice.src = obj.rock;
    console.log(res);
  }

  if (res === 2) {
    compChoice.src = obj.paper;
    console.log(res);
  }

  if (res === 3) {
    compChoice.src = obj.scissors;
    console.log(res);
  }

  if (activate === 0) {
    compChoice.src = obj.question;
  }

  if (res === activate) {
    userInterface.innerHTML = "No Winner";
    userInterface.style.color = "silver";
    spinner.play();
    li.innerHTML = "Player vs Computer: No Win";
    ol.appendChild(li);
    historyArr.push("Player vs Computer: No Win");
    console.log(localStorage);
  }

  if (activate === 1 && res === 3) {
    userInterface.innerHTML = "You Win";
    userInterface.style.color = "gold";
    historyArr.push("Player vs Computer: You Win");
    li.innerHTML = "Player vs Computer: You Win";
    ol.appendChild(li);
    win.play();
  }

  if (activate === 1 && res === 2) {
    userInterface.innerHTML = "You Lose";
    userInterface.style.color = "red";
    lost.play();
    historyArr.push("Player vs Computer: You Lose");
    li.innerHTML = "Player vs Computer: You Lose";
    ol.appendChild(li);
  }

  if (activate === 2 && res === 1) {
    userInterface.innerHTML = "You Win";
    userInterface.style.color = "gold";
    win.play();
    historyArr.push("Player vs Computer: You Win");
    li.innerHTML = "Player vs Computer: You Win";
    ol.appendChild(li);
  }

  if (activate === 2 && res === 3) {
    userInterface.innerHTML = "You Lose";
    userInterface.style.color = "red";
    lost.play();
    historyArr.push("Player vs Computer: You Lose");
    li.innerHTML = "Player vs Computer: You Lose";
    ol.appendChild(li);
  }

  if (activate === 3 && res === 2) {
    userInterface.innerHTML = "You Win";
    userInterface.style.color = "gold";
    win.play();
    historyArr.push("Player vs Computer: You Win");
    li.innerHTML = "Player vs Computer: You Win";
    ol.appendChild(li);
  }

  if (activate === 3 && res === 1) {
    userInterface.innerHTML = "You Lose";
    localStorage.gameHistory = "YOU LOSE";
    userInterface.innerHTML = "You Lose";
    li.innerHTML = "Player vs Computer: You Lose";
    ol.appendChild(li);
    userInterface.style.color = "red";
    lost.play();
  }

  var elements = localStorage.getItem("gameHistory");
  console.log(elements);
}

function refreshGame() {
  activate = 0;
  res = 0;
  compChoice.src = obj.question;
  userChoice.src = obj.question;
  userInterface.innerHTML = "Loading Game...";
  userInterface.style.color = "#0bd4a4";
  timer.play();
  setTimeout(function () {
    timer.pause();
    userInterface.innerHTML = "You Choose First";
  }, 2000);
}