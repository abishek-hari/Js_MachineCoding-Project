const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let interval;
let timeLeft = 10;

function updateTimer() {
  let minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  let seconds = String(Math.floor(timeLeft % 60)).padStart(2, "0");
  let formattedTime = `${minutes}:${seconds}`;

  timer.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

start.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
