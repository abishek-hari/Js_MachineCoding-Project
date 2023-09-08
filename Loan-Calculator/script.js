const loanAmount = document.querySelector("#loan__amount");
const interestRate = document.querySelector("#interest__rate");
const monthsToPay = document.querySelector("#months__to-pay");

// loanAmount.addEventListener("input", calculateLoan);
// interestRate.addEventListener("input", calculateLoan);
// monthsToPay.addEventListener("input", calculateLoan);

const btn = document.querySelector(".btn");
btn.addEventListener("click", calculateLoan);

function calculateLoan() {
  const amount = loanAmount.value;
  const rate = interestRate.value;
  const months = monthsToPay.value;

  let interest = (amount * (rate * 0.01)) / months;

  let monthlyPay = (amount / months + interest).toFixed(2);

  document.querySelector(
    ".loan__result"
  ).innerHTML = `Monthly Payment : ${monthlyPay}`;
}
