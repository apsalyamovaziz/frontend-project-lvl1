import { greeting, randomNumber, playGame } from '../index.js';

greeting();

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  const randomNumber1 = randomNumber(20);
  const randomNumber2 = randomNumber(10);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const answer = gcd(randomNumber1, randomNumber2);
  return [answer, question];
};

export default () => playGame(rule, gcdGame);
