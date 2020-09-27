import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const makeProgression = (firstElement, step, lengthOfProgression) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(firstElement + (i * step));
  }
  return progression;
};
const lengthOfProgression = 10;
const minStep = 1;
const maxStep = 10;
const maxRandomNumber = 10;

const getCorrectAnswerAndQuestion = () => {
  const firstElement = getRandomNumber(0, maxRandomNumber);
  const step = getRandomNumber(minStep, maxStep);
  const progression = makeProgression(firstElement, step, lengthOfProgression);
  const emptyElement = '..';
  const hiddenElementPosition = getRandomNumber(0, maxRandomNumber - 1);
  const correctAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = emptyElement;
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

export default () => playGame(rule, getCorrectAnswerAndQuestion);
