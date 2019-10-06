import './sleep.scss';
import utilities from '../../helpers/utilities';

const deductSleepScore = () => {
  const progressBar = document.getElementById('sleepBar');
  let progressValue = progressBar.value;
  if (progressValue >= 5) {
    progressValue -= 5;
  } else {
    progressValue -= progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Energy = ${progressValue}`;
  utilities.printToDom('sleep-score', domString);
};

const sleepTimer = () => {
  setInterval(deductSleepScore, 10000);
};

const napEvent = () => {
  const progressBar = document.getElementById('sleepBar');
  let progressValue = progressBar.value;
  if (progressValue <= 50) {
    progressValue += 50;
  } else {
    progressValue += 100 - progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Energy = ${progressValue}`;
  utilities.printToDom('sleep-score', domString);
};

const addNapListener = () => {
  document.getElementById('nap').addEventListener('click', napEvent);
};

const sleepEvent = () => {
  const progressBar = document.getElementById('sleepBar');
  let progressValue = progressBar.value;
  if (progressValue <= 40) {
    progressValue += 60;
  } else {
    progressValue += 100 - progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Energy = ${progressValue}`;
  utilities.printToDom('sleep-score', domString);
};

const addSleepButtonListener = () => {
  document.getElementById('slumber').addEventListener('click', sleepEvent);
};

const sleepPrinter = () => {
  const domString = `
  <h1>Sleep</h1>
  <div id='barWrapper'>
  <progress id='sleepBar' min="0" max="100" value="50">Energy Score = 50</progress>
  <div id="sleep-score">Energy = 50</div>
  </div>
  <div id="sleepButtons">
  <button id='nap' class='sleepButtons'>Cat Nap</button>
  <button id='slumber' class='sleepButtons'>Slumber</button>
  </div>
  `;
  utilities.printToDom('sleep', domString);
  addSleepButtonListener();
  addNapListener();
};

export default { sleepPrinter, sleepTimer };
