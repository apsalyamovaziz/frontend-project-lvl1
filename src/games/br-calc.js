import { greeting, randomNumber, playGame } from '../index.js';

greeting();

const rule = 'What is the result of the expression?';

const plus = '+';
const minus = '-';
const mult = '*';

const getOperator = () => {
  const operators = [plus, minus, mult];
  return operators[randomNumber(operators.length)];
};

const calc = (num1, num2, oper) => {
  switch (oper) {
    case plus:
      return num1 + num2;
    case minus:
      return num1 - num2;
    case mult:
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${oper}`);
  }
};

const calcGame = () => {
  const oper = getOperator();
  const randomNumber1 = randomNumber(10);
  const randomNumber2 = randomNumber(10);
  const question = `Question: ${randomNumber1} ${oper} ${randomNumber2}`;
  const answer = calc(randomNumber1, randomNumber2, oper);
  return [answer, question];
};

export default () => playGame(rule, calcGame);
