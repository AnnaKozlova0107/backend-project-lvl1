import readlineSync from 'readline-sync';


export const even = () => {
  const getName = () => readlineSync.question('May I have your name? ');
  const userName = getName();

  console.log('Hello, '+ userName + '!');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  const randomNum = () => {
    return Math.ceil(Math.random() * 10);
  }
  
 
  
  let i = 0;
  while (i < 3) {
    console.log('Question: ' + randomNum());
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'yes' && randomNum % 2 !== 0) {
      return console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLes\'s try again, ${userName}!`);
    } else if (userAnswer === 'no' && randomNum % 2 === 0) {
      return console.log(`\'no\' is wrong answer ;(. Correct answer was \'yes\'.\nLes\'s try again, ${userName}!`);
    } else { 
      console.log('Correct!');
      i += 1;
    }
  }
  return console.log(`Congatulations, ${userName}!`);
};