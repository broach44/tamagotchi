import './fight.scss';
import utilities from '../../helpers/utilities';

let progressValue = 100;

const deductStrength = () => {
  const progressBar = document.getElementById('fightBar');
  progressValue = progressBar.value;
  if (progressValue >= 5) {
    progressValue -= 5;
  } else {
    progressValue -= progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Strength = ${progressValue}`;
  utilities.printToDom('strength-score', domString);
};

const strengthTimer = () => {
  setInterval(deductStrength, 10000);
};

const runAwayEvent = () => {
  const progressBar = document.getElementById('fightBar');
  progressValue = progressBar.value;
  if (progressValue <= 99) {
    progressValue += 1;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Strength = ${progressValue}`;
  utilities.printToDom('fightBar', domString);
};

const addRunAwayListener = () => {
  document.getElementById('runAway').addEventListener('click', runAwayEvent);
};

const fightEvent = () => {
  const progressBar = document.getElementById('fightBar');
  progressValue = progressBar.value;
  if (progressValue >= 10) {
    progressValue -= 10;
  } else {
    progressValue -= progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Strength = ${progressValue}`;
  utilities.printToDom('fightBar', domString);
};

const addFightButtonListener = () => {
  document.getElementById('fightSomething').addEventListener('click', fightEvent);
};

const fightPrinter = () => {
  const domString = `
  <h1>Fight</h1>
  <div id='barWrapper'>
  <progress id='fightBar' min="0" max="100" value="100">Strength Score = 100</progress>
  <div id="strength-score">Strength = 100</div>
  </div>
  <div id="fightButtons">
  <button id='runAway' class='fightButtons'>Bravely Run</button>
  <button id='fightSomething' class='fightButtons'>Fight</button>
  </div>
  `;
  utilities.printToDom('fight', domString);
  addFightButtonListener();
  addRunAwayListener();
};

const getStrengthScore = () => progressValue;

export default { fightPrinter, strengthTimer, getStrengthScore };
