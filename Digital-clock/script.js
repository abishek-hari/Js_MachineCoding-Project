const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

function updateTimer() {
  const now = new Date();
  const hr = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
}

setInterval(updateTimer, 1000);
window.addEventListener("DOMContentLoaded", updateTimer);
