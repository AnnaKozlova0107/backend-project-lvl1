import * as logic from '../src/index.js';

const prime = () => {
  const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskSubject = () => {
    const questionSubject = [];
    const expression = logic.randomNum();
    questionSubject.push(expression);
    const isPrime = () => {
      if (expression < 2) {
        return false;
      }
      for (let result = 2; result < expression; result += 1) {
        if (expression % result === 0) {
          return false;
        }
      }
      return true;
    };
    const answer = isPrime(expression) ? 'yes' : 'no';
    questionSubject.push(answer);
    return questionSubject;
  };
  logic.gameLogic(nameGame, taskSubject);
};

export default prime;
