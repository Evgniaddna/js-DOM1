// Отримуємо елементи за ID
const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const errorMessage = document.getElementById('errorMessage');
const resultValue = document.getElementById('resultValue');

const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');

// Окремі функції для математичних дій
function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}

// Функція перевірки введеного значення
function getValidNumber(inputElement) {
  const value = inputElement.value.trim();

  if (value === '') {
    return null;
  }

  const number = Number(value);

  if (Number.isNaN(number) || !Number.isFinite(number)) {
    return null;
  }

  return number;
}

// Функція заокруглення до сотих, якщо число не ціле
function formatResult(number) {
  if (Number.isInteger(number)) {
    return number;
  }
  return Math.round(number * 100) / 100;
}

// Основна функція обчислення
function performCalculation(operationType) {
  errorMessage.textContent = '';

  const num1 = getValidNumber(firstNumberInput);
  const num2 = getValidNumber(secondNumberInput);

  if (num1 === null || num2 === null) {
    errorMessage.textContent = 'Ви ввели не правильні дані! Введіть коректні числа в обидва поля.';
    resultValue.textContent = '0';
    return;
  }

  if (operationType === 'divide' && num2 === 0) {
    errorMessage.textContent = 'Помилка: ділити на нуль не можна!';
    resultValue.textContent = '0';
    return;
  }

  let result = 0;

  if (operationType === 'add') {
    result = addNumbers(num1, num2);
  } else if (operationType === 'subtract') {
    result = subtractNumbers(num1, num2);
  } else if (operationType === 'multiply') {
    result = multiplyNumbers(num1, num2);
  } else if (operationType === 'divide') {
    result = divideNumbers(num1, num2);
  }

  resultValue.textContent = formatResult(result);
}

// Додаємо обробники подій на кнопки
addButton.addEventListener('click', function () {
  performCalculation('add');
});

subtractButton.addEventListener('click', function () {
  performCalculation('subtract');
});

multiplyButton.addEventListener('click', function () {
  performCalculation('multiply');
});

divideButton.addEventListener('click', function () {
  performCalculation('divide');
});