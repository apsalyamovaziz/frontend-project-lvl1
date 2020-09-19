import { getRandomNumber, playGame } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  const max = 10;
  const randomNumber1 = getRandomNumber(1, max);
  const randomNumber2 = getRandomNumber(1, max);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(gcd(randomNumber1, randomNumber2));
  return [correctAnswer, question];
};

export default () => playGame(rule, gcdGame);
