alert(
  "If you want to proceed with your calculation, please enter one or two values. If not, press ESC or hit the cancel button."
);

function calculator() {
  const stringA = prompt("Enter first value:");
  const numberA = Number(stringA);
  const userNumbers = [numberA];
  const stringB = prompt("If needed, enter a second value.");
  const numberB = Number(stringB);
  userNumbers.push(numberB);

  function squareRoot() {
    if (stringA === "" || stringA === null) {
      const resultSquareRoot = Math.sqrt(stringB);
      if (resultSquareRoot - Math.floor(resultSquareRoot) === 0) {
        return resultSquareRoot;
      }

      return Number(resultSquareRoot.toFixed(3));
    }

    if (stringB === "" || stringB === null) {
      const resultSquareRoot = Math.sqrt(stringA);
      if (resultSquareRoot - Math.floor(resultSquareRoot) === 0) {
        return resultSquareRoot;
      }

      return Number(resultSquareRoot.toFixed(3));
    }
  }

  squareRoot();

  function calculations() {
    let resultSum = 0;
    function sum() {
      for (let i = 0; i < userNumbers.length; i++) {
        resultSum += userNumbers[i];
      }

      if (resultSum - Math.floor(resultSum) === 0) {
        return resultSum;
      }

      return Number(resultSum.toFixed(3));
    }

    function rest() {
      let resultRest = userNumbers[0];
      for (let i = 1; i < userNumbers.length; i++) {
        resultRest -= userNumbers[i];
      }

      if (resultRest - Math.floor(resultRest) === 0) {
        return resultRest;
      }

      return Number(resultRest.toFixed(3));
    }

    function multiplication() {
      let resultMultiplication = userNumbers[0];
      for (let i = 1; i < userNumbers.length; i++) {
        resultMultiplication *= userNumbers[i];
      }

      if (resultMultiplication - Math.floor(resultMultiplication) === 0) {
        return resultMultiplication;
      }

      return Number(resultMultiplication.toFixed(3));
    }

    function division() {
      let resultDivision = userNumbers[0];
      for (let i = 1; i < userNumbers.length; i++) {
        resultDivision = resultDivision /= userNumbers[i];
      }

      if (resultDivision - Math.floor(resultDivision) === 0) {
        return resultDivision;
      }

      return Number(resultDivision.toFixed(3));
    }

    const summary = [
      { Operation: "SUM", Result: sum() },
      { Operation: "REST", Result: rest() },
      { Operation: "MULTIPLICATION", Result: multiplication() },
      { Operation: "DIVISION", Result: division() },
    ];
    return summary;
  }

  calculations();

  if (isNaN(numberA) || isNaN(numberB)) {
    alert(
      "Oi, be careful and please only enter numbers! Decimals need to be indicated with a dot (.) and not a comma (,)"
    );
  } else if (stringA === null && stringB === null) {
    alert(
      `Are you al'right, wee fella? Calculations wil be stopped as you pressed ESC twice. `
    );
  } else if (stringA === "" && stringB === "") {
    alert("There were no numbers introduced. Byeeeeee!");
  } else if (
    stringA === "" ||
    stringA === null ||
    stringB === "" ||
    stringB === null
  ) {
    alert(" The square root of your value is " + squareRoot());
  } else
    alert(
      `The results for the calculations for your two values are as follow: ${console.table(
        calculations()
      )}`
    );

  function bye() {
    const again = prompt("Would you like to start over? Y or N");

    if (again === null) {
      alert("See you soon!");
    } else {
      const againUpper = again.toUpperCase();
      while (againUpper !== "Y" || againUpper !== "N") {
        if (againUpper === "Y") {
          calculator();
        }
      }

      if (againUpper === "N") {
        alert("See you soon!");
      } else alert("Please introduce a Y or N answer.");
      bye();
    }
  }

  bye();
}

calculator();
