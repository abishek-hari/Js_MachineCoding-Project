const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

function updateCountDown() {
  const newYearTime = new Date("jan 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const sec = 1000;
  const min = sec * 60;
  const hr = min * 60;
  const days = hr * 24;

  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hr);
  const m = Math.floor((gap % hr) / min);
  const s = Math.floor((gap % min) / sec);

  day.textContent = d;
  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;

  setInterval(updateCountDown, 1000);
}
updateCountDown();
