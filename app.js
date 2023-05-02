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
