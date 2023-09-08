const currencyFirst = document.querySelector("#currency__first");
const currencySecond = document.querySelector("#currency__second");

const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");

const exchangeRate = document.querySelector(".exchange__rate");

let apiKey = "157f5943f61ffd8a61f3aaa4";
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFirst.value}`;

updaterate();

function updaterate() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecond.value];
      console.log(rate);
      exchangeRate.innerText = ` ${firstInput.value} ${currencyFirst.value} = ${secondInput.value} ${currencySecond.value}`;
      //   exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;

      secondInput.value = (firstInput.value * rate).toFixed(2);
    });
}

currencyFirst.addEventListener("change", updaterate);
currencySecond.addEventListener("change", updaterate);
firstInput.addEventListener("input", updaterate);
secondInput.addEventListener("input", updaterate);
