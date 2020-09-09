import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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

const rounds = 2;

export default () => {
  for (let i = 0; i <= rounds; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 20);
    console.log(`Question: ${randomNumber1}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime(randomNumber1) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isPrime(randomNumber1)}.
            Let's try again, ${userName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
