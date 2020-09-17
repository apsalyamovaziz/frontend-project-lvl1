import { greeting, randomNumber, playGame } from '../index.js';

greeting();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const randomNum = randomNumber(10);
  const question = `Question: ${randomNum}`;
  const answer = isEven(randomNum);
  return [answer, question];
};

export default () => playGame(rule, evenGame);
