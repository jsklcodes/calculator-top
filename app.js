const currentOperationDisplay = document.querySelector('.current-operation');
const currentOperandDisplay = document.querySelector('.current-operand');
const keyboard = document.querySelector('.keyboard');

let previousOperand = '';
let currentOperand = '';
let operator = '';

const operations = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  '/': (firstOperand, secondOperand) =>
    secondOperand === 0
      ? 'Divide by zero? Serious?'
      : firstOperand / secondOperand,
};

const operate = (operator, firstOperand, secondOperand) => {
  return operations[operator](Number(firstOperand), Number(secondOperand));
};

const handleOperandButton = buttonContent => {
  currentOperand += buttonContent;
  currentOperandDisplay.textContent = currentOperand;
};

const handleOperatorButton = buttonContent => {
  if (operator !== '') {
    const result = operate(operator, previousOperand, currentOperand);

    currentOperationDisplay.textContent = `${previousOperand} ${operator} ${currentOperand} =`;

    currentOperand = result;
    currentOperandDisplay.textContent = currentOperand;
  }

  previousOperand = currentOperand;
  operator = buttonContent;
  currentOperationDisplay.textContent = `${currentOperand} ${operator}`;
  currentOperand = '';
};

const handleEqualsButton = () => {
  const result = operate(operator, previousOperand, currentOperand);

  if (currentOperand) {
    currentOperationDisplay.textContent = `${previousOperand} ${operator} ${currentOperand} =`;

    operator = '';
    currentOperand = result;
    currentOperandDisplay.textContent = currentOperand;
  }
};

keyboard.addEventListener('click', event => {
  const buttonContent = event.target.textContent;
  const buttonType =
    event.target.dataset.type || event.target.parentElement.dataset.type;

  if (!buttonType) {
    return;
  }

  if (buttonType === 'operand') {
    handleOperandButton(buttonContent);
  }

  if (buttonType === 'operator') {
    handleOperatorButton(buttonContent);
  }

  if (buttonType === 'equals') {
    handleEqualsButton();
  }
});
