import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getCorrectAnswerAndQuestion = () => {
  const max = 10;
  const randomNumber1 = getRandomNumber(1, max);
  const randomNumber2 = getRandomNumber(1, max);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(gcd(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

export default () => playGame(rule, getCorrectAnswerAndQuestion);
