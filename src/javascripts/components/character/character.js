import utilities from '../../helpers/utilities';

import play from '../play/play';
import sleep from '../sleep/sleep';
import eat from '../eat/eat';
import fight from '../fight/fight';

import './character.scss';

let position = 256;
let totalScore = 75;

const animateScript = () => {
  document.getElementById('image-dog').style.backgroundPosition = `-${position}px 0px`;
  if (position < 1280) {
    position += 256;
  } else {
    position = 256;
  }
  return position;
};

const int = setInterval(animateScript, 150);

const characterPrinter = () => {
  const domString = `
  <h1>Ghost</h1>
  <progress id="char-progress" min="0" max="100" value="100">Character progres</progress>
  <p id="image-dog"></p>
  `;
  utilities.printToDom('pet', domString);
};

const gatherScores = () => {
  const joyScore = play.getPlayScore();
  const sleepScore = sleep.getSleepScore();
  const eatScore = eat.getEatScore();
  const strengthScore = fight.getStrengthScore();
  totalScore = joyScore + sleepScore + eatScore + strengthScore;
  return totalScore;
};

const reloadFunction = () => {
  window.location.reload();
};

const reviveListener = () => {
  const reviveButton = document.getElementById('revive');
  reviveButton.addEventListener('click', reloadFunction);
};

let averageScore = 75;

const averageScores = () => {
  gatherScores();
  averageScore = totalScore / 4;
  const charProgressBar = document.getElementById('char-progress');
  charProgressBar.setAttribute('value', averageScore);
  return averageScore;
};

const killPet = () => {
  if (averageScore <= 0) {
    const domString = `
    <h1 id="deadDog">You killed Ghost!</h1>
    <button id="revive">Revive Pet</button>
    <p id="skull"><p>
    `;
    utilities.printToDom('progress', domString);
    reviveListener();
    const petDiv = document.getElementById('pet');
    petDiv.style.display = 'none';
    clearInterval(int);
  }
};

const checkProgress = () => {
  if (averageScore > 0) {
    averageScores();
  } else {
    killPet();
  }
};

const averageInt = 1000;

const averageTimer = () => {
  setInterval(checkProgress, averageInt);
};

// const clearTimer = () => {
//   clearInterval(averageTimer);
//   console.log('cleartimer function called');
// };

// document.addEventListener('killTimer', clearTimer);

export default { characterPrinter, averageTimer };
