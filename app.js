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

keyboard.addEventListener('click', event => {
  const buttonContent = event.target.textContent;
  const buttonType =
    event.target.dataset.type || event.target.parentElement.dataset.type;

  if (!buttonType) {
    return;
  }
});
