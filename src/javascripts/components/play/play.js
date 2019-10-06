import './play.scss';
import utilities from '../../helpers/utilities';

const deductJoyScore = () => {
  const progressBar = document.getElementById('playBar');
  let progressValue = progressBar.value;
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

const puzzleEvent = () => {
  const progressBar = document.getElementById('playBar');
  let progressValue = progressBar.value;
  if (progressValue <= 98) {
    progressValue += 2;
  } else {
    progressValue = 100;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Joy = ${progressValue}`;
  utilities.printToDom('joy-score', domString);
};

const addPuzzleListener = () => {
  document.getElementById('puzzle').addEventListener('click', puzzleEvent);
};

const videoGameEvent = () => {
  const progressBar = document.getElementById('playBar');
  let progressValue = progressBar.value;
  if (progressValue <= 50) {
    progressValue += 50;
  } else {
    progressValue = progressValue + 100 - progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Joy = ${progressValue}`;
  utilities.printToDom('joy-score', domString);
};

const addVideoGamesListener = () => {
  document.getElementById('videoGames').addEventListener('click', videoGameEvent);
};

const playPrinter = () => {
  const domString = `
  <h1>Play</h1>
  <div id='barWrapper'>
  <progress id='playBar'min="0" max="100" value="50">Joy = 50</progress>
  <div id="joy-score">Joy = 50</div>
  </div>
  <div id="playButtons">
  <button id='videoGames' class='playButtons'>Video Games</button>
  <button id='puzzle' class='playButtons'>Puzzle</button>
  </div>
  `;
  utilities.printToDom('play', domString);
  addVideoGamesListener();
  addPuzzleListener();
};

export default { playPrinter, joyTimer };
