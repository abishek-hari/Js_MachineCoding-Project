const days = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

function updateCountDown() {
  const newYearTime = new Date("jan 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const sec = 1000;
  const min = sec * 60;
  const hrs = min * 60;
  const day = hrs * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hrs);
  const m = Math.floor((gap % hrs) / min);
  const s = Math.floor((gap % min) / sec);

  days.innerText = d;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
}

setInterval(updateCountDown, 1000);
