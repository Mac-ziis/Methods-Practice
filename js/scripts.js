document.addEventListener("DOMContentLoaded", function () {
  function isEmpty(testString) {
    return testString.trim().length === 0;
  }

  function getNumbersInput() {
    const numbersInput = document.getElementById("numbers-input").value;
    const numbersArray = numbersInput.split(",").map(num => Number(num.trim()));
    return numbersArray;
  }

  function getWordsInput() {
    const wordsInput = document.getElementById("words-input").value;
    const wordsArray = wordsInput.split(" ").filter(word => word.trim() !== "");
    return wordsArray;
  }

  function applyArrayMethods(array, methods) {
    let numbersResults = [];
    let wordsResults = [];

    methods.forEach(method => {
      let numbersResult = Array.from(array);
      let wordsResult = Array.from(array);

      switch (method) {
        case 'map':
          if (Array.isArray(numbersResult)) {
            numbersResult = numbersResult.map(item => (typeof item === 'number' ? item * 2 : item));
          }
          if (Array.isArray(wordsResult)) {
            wordsResult = wordsResult.map(item => (typeof item === 'string' ? item.trim() : item));
          }
          break;
        case 'reduce':
          if (Array.isArray(numbersResult) && numbersResult.every(item => typeof item === 'number')) {
            numbersResult = numbersResult.reduce((acc, item) => acc + item, 0);
          }
          break;
        case 'slice':
          if (Array.isArray(numbersResult)) {
            numbersResult = numbersResult.slice(1, 4);
          }
          if (Array.isArray(wordsResult)) {
            wordsResult = wordsResult.slice(1, 4);
          }
          break;
        case 'split':
          if (Array.isArray(wordsResult) && wordsResult.every(item => typeof item === 'string')) {
            wordsResult = wordsResult.flatMap(item => item.split(","));
          }
          break;
        case 'trim':
          if (Array.isArray(wordsResult) && wordsResult.every(item => typeof item === 'string')) {
            wordsResult = wordsResult.map(item => item.trim());
          } else if (typeof wordsResult === 'string') {
            wordsResult = wordsResult.trim();
          }
          break;
        default:
          break;
      }

      numbersResults.push(numbersResult);
      wordsResults.push(wordsResult);
    });

    return [numbersResults, wordsResults];
  }

  function displayNumbersResult(results) {
    const numbersResultContainer = document.getElementById("numbers-result").querySelector("p");
    numbersResultContainer.innerHTML = "Numbers Result:";

    const resultList = document.createElement("ul");
    results.forEach((resultGroup, index) => {
      const listItem = document.createElement("li");
      let methodResult = "";
      if (Array.isArray(resultGroup)) {
        methodResult = resultGroup.join(", ");
      } else {
        methodResult = resultGroup.toString();
      }
      listItem.textContent = `Method ${index + 1}: ${methodResult}`;
      resultList.appendChild(listItem);
    });

    numbersResultContainer.appendChild(resultList);
  }

  function displayWordsResult(results) {
    const wordsResultContainer = document.getElementById("words-result").querySelector("p");
    wordsResultContainer.innerHTML = "Words Result:";

    const resultList = document.createElement("ul");
    results.forEach((resultGroup, index) => {
      const listItem = document.createElement("li");
      let methodResult = "";
      if (Array.isArray(resultGroup)) {
        methodResult = resultGroup.join(", ");
      } else {
        methodResult = resultGroup.toString();
      }
      listItem.textContent = `Method ${index + 1}: ${methodResult}`;
      resultList.appendChild(listItem);
    });

    wordsResultContainer.appendChild(resultList);
  }

  function displayResults(numbersResult, wordsResult) {
    displayNumbersResult(numbersResult);
    displayWordsResult(wordsResult);
  }

  document.getElementById("data-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const numbers = getNumbersInput();
    const words = getWordsInput();

    const selectedMethods = [
      'map',
      'reduce',
      'slice',
      'split',
      'trim',
    ];

    const [numbersResult, wordsResult] = applyArrayMethods(numbers, selectedMethods);
    displayResults(numbersResult, wordsResult);
  });
});







