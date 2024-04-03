let calculation;
    loadCalculation();

    function loadCalculation() {
      calculation = localStorage.getItem("calculation");

      if (!calculation) {
        calculation = ""
      } else {
        showCalculation();
      }
    }

    function showCalculation() {
      const displayElement = document.querySelector('.js-output');
      displayElement.innerHTML = calculation;
    }

    function saveCalculation() {
      localStorage.setItem("calculation", calculation)
    }

    function updateCalculation(character) {
      calculation += character;
      saveCalculation();
      showCalculation();
    }

    function clearCalculation() {
      calculation = '';
      saveCalculation();
      showCalculation();
    }

    function evaluateCalculation() {
      calculation = eval(calculation);
      saveCalculation();
      showCalculation();
    }