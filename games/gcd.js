import * as logic from '../src/index.js';

export const gcd = () => {
  const nameGame = 'Find the greatest common divisor of given numbers.';
  const taskSubject = () => {
    const questionSubject = [];
    const number1 = logic.randomNum();
    const number2 = logic.randomNum();
    const expression = `${number1} ${number2}`;
    questionSubject.push(expression);
    if (number1 < number2) {
        let divisor = number1;
        while (number1 % divisor !== 0 || number2 % divisor !== 0) {
          divisor -= 1;
        }
        questionSubject.push(String(divisor));
    } else {
        let divisor = number2;
        while (number1 % divisor !== 0 || number2 % divisor !== 0) {
          divisor -= 1;
        } 
        questionSubject.push(String(divisor));
    }
    return questionSubject;
  };
  logic.gameLogic(nameGame, taskSubject);
};
