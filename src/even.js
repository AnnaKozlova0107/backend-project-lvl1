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
    const number = randomNum();
    console.log('Question: ', number);
    const userAnswer = readlineSync.question('Your answer: ');

    const check1 = ((userAnswer === 'yes') && (number % 2 === 0));
    const check2 = ((userAnswer === 'no') && (number % 2 !== 0));

    if (check1 === true || check2 === true) {
      console.log('Correct!');
      i += 1;
    } else {
      const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${opposite}.\nLes\'s try again, ${userName}!`);
    } 
  }
  return console.log(`Congatulations, ${userName}!`);
};