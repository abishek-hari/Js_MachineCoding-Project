const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

celsius.addEventListener("change", convertTemp);
fahrenheit.addEventListener("change", convertTemp);
kelvin.addEventListener("change", convertTemp);

function convertTemp(e) {
  const currentValue = +e.target.value;

  switch (e.target.name) {
    case "celsius":
      kelvin.value = (currentValue + 273.32).toFixed(2);
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (currentValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}