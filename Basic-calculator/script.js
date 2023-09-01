const btns = document.querySelectorAll("button");
const input = document.querySelector(".input");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent;
    if (btnValue === "AC") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else if (btnValue === "Clear") {
      eraseResult();
    } else {
      appendResult(btnValue);
    }
  });
});

function clearResult() {
  input.value = "";
}
function calculateResult() {
  input.value = eval(input.value);
}
function eraseResult() {
  input.value = input.value.slice(0, -1);
}
function appendResult(btn) {
  input.value += btn;
}
