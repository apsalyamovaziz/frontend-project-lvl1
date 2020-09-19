import { getRandomNumber, playGame } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const max = 10;
  const randomNum = getRandomNumber(1, max);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => playGame(rule, evenGame);
