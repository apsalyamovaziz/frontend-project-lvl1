import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const maxRandomNumber = 10;

const getCorrectAnswerAndQuestion = () => {
  const randomNum = getRandomNumber(1, maxRandomNumber);
  const question = randomNum;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(rule, getCorrectAnswerAndQuestion);
