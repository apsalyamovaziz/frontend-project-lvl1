import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const rounds = 2;

export default () => {
  for (let i = 0; i <= rounds; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 20);
    const randomNumber2 = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (gcd(randomNumber1, randomNumber2) === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd(randomNumber1, randomNumber2)}.
            Let's try again, ${userName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
