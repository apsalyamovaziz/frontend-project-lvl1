import { greeting, randomNumber, playGame } from '../index.js';

greeting();
const rule = 'What number is missing in the progression?';

const makeProgression = () => {
  const progression = [];
  const step = randomNumber(20);
  let start = randomNumber(10);
  for (let i = 0; i < 10; i += 1) {
    start += step;
    progression.push(start);
  }
  return progression;
};

const progrGame = () => {
  const arrProgression = makeProgression();
  const hide = '..';
  const hideElement = randomNumber(10);
  const hiddenEl = arrProgression[hideElement];
  arrProgression[hideElement] = hide;
  const resultString = String(arrProgression.join(' '));
  const question = `Question: ${resultString}`;
  const answer = hiddenEl;
  return [answer, question];
};

export default () => playGame(rule, progrGame);
