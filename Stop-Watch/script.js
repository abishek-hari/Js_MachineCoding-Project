// SELECTORS
const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial Values
let seconds = 0;
let minutes = 0;
let hours = 0;
let milliseconds = 0;
let intervalId;

// Update Timer Function
function updateTimer() {
  milliseconds++;
  if (milliseconds === 99) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const millsec = String(milliseconds).padStart(2, "0");
  const hrs = String(hours).padStart(2, "0");
  const min = String(minutes).padStart(2, "0");
  const sec = String(seconds).padStart(2, "0");

  timer.textContent = `${hrs}:${min}:${sec}.${millsec}`;
}

// Start Timer
function startTimer() {
  intervalId = setInterval(() => {
    updateTimer();
  }, 10);
}

// Stop Timer
function stopTimer() {
  clearInterval(intervalId);
}

// Reset Timer
function resetTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = `00:00:00`;
  stopTimer();
}
