import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const maxGameRound = 3;

export const playGame = (rule, getCorrectAnswerAndQuestion) => {
  const userName = readlineSync.question('May I have your name? ');
  const sayHello = () => console.log(`Hello, ${userName}!`);
  sayHello();
  console.log(rule);
  let i = 1;
  while (i <= maxGameRound) {
    const [correctAnswer, question] = getCorrectAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
