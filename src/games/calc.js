import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'What is the result of the expression?';

const plus = '+';
const minus = '-';
const mult = '*';

const getOperator = () => {
  const operators = [plus, minus, mult];
  return operators[getRandomNumber(0, operators.length - 1)];
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

const maxRandomNumber = 15;

const getCorrectAnswerAndQuestion = () => {
  const oper = getOperator();
  const randomNumber1 = getRandomNumber(1, maxRandomNumber);
  const randomNumber2 = getRandomNumber(1, maxRandomNumber);
  const question = `${randomNumber1} ${oper} ${randomNumber2}`;
  const correctAnswer = String(calc(randomNumber1, randomNumber2, oper));
  return [question, correctAnswer];
};

export default () => playGame(rule, getCorrectAnswerAndQuestion);
