import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();

const makeProgression = () => {
  const progression = [];
  const step = Math.floor(Math.random() * 20);
  let start = Math.floor(Math.random() * 10);
  for (let i = 0; i < 10; i += 1) {
    start += step;
    progression.push(start);
  }
  return progression;
};

const rounds = 2;

export default () => {
  for (let i = 0; i <= rounds; i += 1) {
    const arrProgression = makeProgression();
    const hide = '..';
    const hideElement = Math.floor(Math.random() * 10);
    const hiddenEl = arrProgression[hideElement];
    arrProgression[hideElement] = hide;
    const resultString = String(arrProgression.join(' '));
    console.log(`Question: ${resultString}`);
    const answer = readlineSync.question('Your answer: ');
    if (hiddenEl === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${hiddenEl}.
            Let's try again, ${userName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
