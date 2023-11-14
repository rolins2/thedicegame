var num = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var d1 = document.querySelectorAll("img");
// var d2 = document.querySelector("img2");

// d1.setAttribute("src", "./images/dice4.png");
var head = document.querySelector("h1");
setImage(num, 0);
setImage(num2, 1);

checkWinner(num, num2);

function setImage(num, i) {
  if (num === 1) {
    d1[i].setAttribute("src", "./images/dice1.png");
  } else if (num === 2) {
    d1[i].setAttribute("src", "./images/dice2.png");
  } else if (num === 3) {
    d1[i].setAttribute("src", "./images/dice3.png");
  } else if (num === 4) {
    d1[i].setAttribute("src", "./images/dice4.png");
  } else if (num === 5) {
    d1[i].setAttribute("src", "./images/dice5.png");
  } else {
    d1[i].setAttribute("src", "./images/dice6.png");
  }
}

function checkWinner(num1, num2) {
  if (num1 > num2) {
    head.innerHTML = "Player 1 Wins";
  } else if (num1 === num2) {
    head.innerHTML = "Draw";
  } else {
    head.innerHTML = "Player 2 Wins";
  }
}
