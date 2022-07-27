import * as logic from '../index.js';

const nameGame = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionArray = [];
  let index = logic.randomNum(1, 5);
  progressionArray.push(index);
  const stepProgression = logic.randomNum(1, 10);
  let progressionLength = 1;
  while (progressionLength < 10) {
    index += stepProgression;
    progressionArray.push(index);
    progressionLength += 1;
  }
  return progressionArray;
};

const getGameData = () => {
  const randomIndex = logic.randomNum(1, 10);
  const progression = getProgression();
  const temp = progression[randomIndex];
  progression[randomIndex] = '..';
  const strProgression = progression.join(' ');
  const correctAnswer = String(temp);
  return [strProgression, correctAnswer];
};

const runProgressionGame = () => logic.gameLogic(nameGame, getGameData);

export default runProgressionGame;
