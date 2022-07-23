import * as logic from '../src/index.js';

const nameGame = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionArray = [];
  let index = logic.randomNum();
  progressionArray.push(index);
  const stepProgression = logic.randomNum();
  let progressionLength = 1;
  while (progressionLength < 10) {
    index += stepProgression;
    progressionArray.push(index);
    progressionLength += 1;
  }
  return progressionArray;
};

const getGameData = () => {
  const randomIndex = logic.randomNum();
  const progression = getProgression();
  const temp = progression[randomIndex];
  progression[randomIndex] = '..';
  const str = progression.join(' ');
  const correctAnswer = String(temp);
  return [str, correctAnswer];
};
logic.gameLogic(nameGame, getGameData);

export default getGameData;
