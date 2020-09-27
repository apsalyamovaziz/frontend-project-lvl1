import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const maxRandomNumber = 10;

const getCorrectAnswerAndQuestion = () => {
  const randomNum = getRandomNumber(1, maxRandomNumber);
  const question = randomNum;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(rule, getCorrectAnswerAndQuestion);
