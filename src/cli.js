import readlineSync from 'readline-sync';

// export default () => {
//   const name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
// };

export const userName = readlineSync.question('May I have your name? ');
export const greeting = () => console.log(`Hello, ${userName}!`);
