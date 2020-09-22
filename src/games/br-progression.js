import { getRandomNumber, playGame } from '../index.js';

const rule = 'What number is missing in the progression?';

const makeProgression = (firstElement, step, lengthOfProgression) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(firstElement + (i * step));
  }
  return progression;
};

const progrGame = () => {
  const lengthOfProgression = 10;
  const minStep = 1;
  const maxStep = 10;
  const maxFirstElement = 10;
  const firstElement = getRandomNumber(0, maxFirstElement);
  const step = getRandomNumber(minStep, maxStep);
  const arrProgression = makeProgression(firstElement, step, lengthOfProgression);
  const emptyElement = '..';
  const hiddenElementPosition = getRandomNumber(0, maxFirstElement - 1);
  const correctAnswer = arrProgression[hiddenElementPosition];
  arrProgression[hiddenElementPosition] = emptyElement;
  const question = `${arrProgression.join(' ')}`;
  return [question, String(correctAnswer)];
};

export default () => playGame(rule, progrGame);
