import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswerAndQuestion = () => {
  const max = 10;
  const randomNum = getRandomNumber(1, max);
  const question = String(randomNum);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(rule, getCorrectAnswerAndQuestion);
