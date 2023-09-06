const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const resultEl = document.querySelector(".result");

console.log(weightEl.value, heightEl.value);

weightEl.addEventListener("input", calculate);
heightEl.addEventListener("input", calculate);

calculate();
function calculate() {
  let weight = weightEl.value;
  let height = heightEl.value;
  document.querySelector("#weight__val").textContent = `${weight}kg`;
  document.querySelector("#height__val").textContent = `${height}cm`;

  // calculate Bmi
  let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  resultEl.innerHTML = ` <p class="value">${bmi}</p>`;

  let element = document.querySelector(".category");

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "obese";
  }

  element.textContent = category;
}
