import readlineSync from 'readline-sync';
export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = Math.random();
  let i = 0;
  while (i <= 3) {
    console.log('Question: ' + randomNum);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === yes && randoNum % 2 !== 0) {
      return console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'./nLes\'s try again, ${userName}!`);
    } else if (userAnswer === no && randomNum % 2 === 0) {
      return console.log(`\'no\' is wrong answer ;(. Correct answer was \'yes\'./nLes\'s try again, ${userName}!`);
    } else { 
      return console.log('Correct!');
      i += 1;
    }
  }
};