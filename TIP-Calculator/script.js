const tipPerc = document.querySelector("#tip-perc");
const people = document.querySelector("#people-val");
const amount = document.querySelector(".amount");

tipPerc.addEventListener("input", calculate);
people.addEventListener("input", calculate);
amount.addEventListener("change", calculate);

function calculate() {
  let bill = parseFloat(amount.value);
  let tips = parseFloat(tipPerc.value);
  let peolpes = parseFloat(people.value);

  document.querySelector(".tip__perc").textContent = `${tips}`;
  document.querySelector(".people").textContent = `${peolpes}`;
  document.querySelector(".tip").textContent = `${tips}`;

  let tipAmount = parseFloat((bill * (tips / 100)).toFixed(2));
  let totalBill = parseFloat(bill + tipAmount).toFixed(2);

  let amountPerPerson = (totalBill / peolpes).toFixed(2);

  let tipsAmountPerPerson = (tipAmount / peolpes).toFixed(2);

  document.querySelector(".total__amount").textContent = `${totalBill}`;
  document.querySelector(
    ".tip-per-person"
  ).textContent = `${tipsAmountPerPerson}`;

  document.querySelector(
    ".total-per-person"
  ).textContent = `${amountPerPerson}`;
}
