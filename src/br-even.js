import readlineSync from 'readline-sync';
import { greeting, userName } from './cli.js';

greeting();

const yesCount = 2;
export default () => {
  for (let i = 0; i <= yesCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = (number) => {
      if (number % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    if (isEven(randomNumber) === answer) {
      console.log('Correct!');
    } else {
      i = 0;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(randomNumber)}.
            Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
