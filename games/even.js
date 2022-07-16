import * as logic from '../src/index.js';

export const even = () => {
  const nameGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskSubject = () => {
    const questionSubject = [];
    const expression = logic.randomNum();
    questionSubject.push(expression);
    if (expression % 2 === 0) {
      const answer = 'yes';
      questionSubject.push(answer);
    } else {
      const answer = 'no';
      questionSubject.push(answer);
    }
    return questionSubject;
  };

  logic.gameLogic(nameGame, taskSubject);
};

export default even;
