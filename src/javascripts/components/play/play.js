import './play.scss';
import utilities from '../../helpers/utilities';

let progressValue = 50;

const deductJoyScore = () => {
  const progressBar = document.getElementById('playBar');
  progressValue = progressBar.value;
  if (progressValue >= 5) {
    progressValue -= 5;
  } else {
    progressValue -= progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Joy = ${progressValue}`;
  utilities.printToDom('joy-score', domString);
};

const joyTimer = () => {
  setInterval(deductJoyScore, 10000);
};

const tugEvent = () => {
  const progressBar = document.getElementById('playBar');
  progressValue = progressBar.value;
  if (progressValue <= 98) {
    progressValue += 2;
  } else {
    progressValue = 100;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Joy = ${progressValue}`;
  utilities.printToDom('joy-score', domString);
};

const addTugListener = () => {
  document.getElementById('tug').addEventListener('click', tugEvent);
};

const fetchGameEvent = () => {
  const progressBar = document.getElementById('playBar');
  progressValue = progressBar.value;
  if (progressValue <= 50) {
    progressValue += 50;
  } else {
    progressValue = progressValue + 100 - progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Joy = ${progressValue}`;
  utilities.printToDom('joy-score', domString);
};

const addFetchGameListener = () => {
  document.getElementById('fetchGame').addEventListener('click', fetchGameEvent);
};

const playPrinter = () => {
  const domString = `
  <h1>Play</h1>
  <div id='barWrapper'>
  <progress id='playBar'min="0" max="100" value="50">Joy = 50</progress>
  <div id="joy-score">Joy = 50</div>
  </div>
  <div id="playButtons">
  <button id='fetchGame' class='playButtons'>Fetch</button>
  <button id='tug' class='playButtons'>Tug</button>
  </div>
  `;
  utilities.printToDom('play', domString);
  addFetchGameListener();
  addTugListener();
};

const getPlayScore = () => progressValue;

export default { playPrinter, joyTimer, getPlayScore };
