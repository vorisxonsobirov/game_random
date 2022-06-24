const btn = document.getElementById("btn");
const raqam = document.getElementById("raqam");
const result = document.getElementById("btn_result");
const raqam2 = document.getElementById("raqam2");
const btn2 = document.getElementById("btn2");
const winner = document.getElementById("text_winner");

let random;
let random1;

btn.addEventListener("click", function () {
  random = Math.floor(Math.random() * 100);
  raqam.textContent = random;
});
btn2.addEventListener("click", function () {
  random1 = Math.floor(Math.random() * 100);
  raqam2.innerHTML = random1;
});
btn_result.addEventListener("click", function () {
  if (random > random1) {
    alert("player one won");
  } else if (random < random1) {
    alert("player two won");
  }
  if (random > random1) {
    text_winner.textContent = "Player one winner";
  } else if (random < random1) {
    text_winner.textContent = "Player two winner";
  }
});
