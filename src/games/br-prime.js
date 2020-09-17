import { greeting, randomNumber, playGame } from '../index.js';

greeting();
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  const randomNum = randomNumber(10);
  const question = `Question: ${randomNum}`;
  const answer = isPrime(randomNum);
  return [answer, question];
};

export default () => playGame(rule, prime);
