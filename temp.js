document.addEventListener("DOMContentLoaded", function () {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitResult = document.getElementById("fahrenheitResult");
  const kelvinResult = document.getElementById("kelvinResult");
  const convertButton = document.getElementById("convertButton");

  convertButton.addEventListener("click", function () {
      const celsiusValue = parseFloat(celsiusInput.value);

      if (!isNaN(celsiusValue)) {
          const fahrenheitValue = (celsiusValue * 9/5) + 32;
          const kelvinValue = celsiusValue + 273.15;

          fahrenheitResult.textContent = fahrenheitValue.toFixed(2);
          kelvinResult.textContent = kelvinValue.toFixed(2);
      } else {
          alert("Please enter a valid number for Celsius temperature.");
      }
  });
});
