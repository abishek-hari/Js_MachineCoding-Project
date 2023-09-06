const btn = document.querySelector(".calc__emi");

const emiLoanAmount = document.querySelector("#emi__loan-amount");
const emiMonthlyInterest = document.querySelector("#emi__monthly-intrest");
const emiLoanTenure = document.querySelector("#emi__loan-tenure");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
  const amountValue = emiLoanAmount.value;
  const monthlyInterest = emiMonthlyInterest.value;
  const loanTenure = emiLoanTenure.value;

  const r = monthlyInterest / 12 / 100;
  const n = loanTenure * 12;

  console.log(amountValue, monthlyInterest, loanTenure);

  let emiResult =
    (amountValue * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const output = emiResult.toFixed(2);
  result.innerHTML = `${output}`;
  result.classList.add("show");
});

reset.addEventListener("click", () => {
  emiLoanAmount.value = "";
  emiLoanTenure.value = "";
  emiMonthlyInterest.value = "";
  result.classList.remove("show");
});
