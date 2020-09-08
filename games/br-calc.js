import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();
console.log('What is the result of the expression?');

const plus = '+';
const minus = '-';
const mult = '*';

const getOperator = () => {
  const operators = [plus, minus, mult];
  return operators[Math.floor(Math.random() * operators.length)];
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

const rounds = 2;

export default () => {
  for (let i = 0; i <= rounds; i += 1) {
    const oper = getOperator();
    const randomNumber1 = Math.floor(Math.random() * 20);
    const randomNumber2 = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumber1} ${oper} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (calc(randomNumber1, randomNumber2, oper) === parseInt(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${calc(randomNumber1, randomNumber2, oper)}.
            Let's try again, ${userName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
