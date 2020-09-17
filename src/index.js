import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');
export const greeting = () => console.log(`Hello, ${userName}!`);
export const randomNumber = (limit = 10) => Math.floor(Math.random() * limit);

const gameRound = 3;

export const playGame = (rule, expression) => {
  console.log(rule);
  let i = 1;
  while (i <= gameRound) {
    const [answer, question] = expression();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    /// console.log(typeof(userAnswer));
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.
            Let's try again, ${userName}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
