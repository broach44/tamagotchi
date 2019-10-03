import '../../styles/play.scss';
import utilities from '../helpers/utilities';

let score = 50;

const puzzleEvent = () => {
  if (score <= 98) {
    score += 2;
  } else {
    score = 100;
  }
  const domString = `
  <div id='playBar'>Joy Score = ${score}</div>
  `;
  utilities.printToDom('playBar', domString);
};

const addPuzzleListener = () => {
  document.getElementById('puzzle').addEventListener('click', puzzleEvent);
};

const videoGameEvent = () => {
  if (score <= 50) {
    score += 50;
  } else {
    score = score + 100 - score;
  }
  const domString = `
  <div id='playBar'>Joy Score = ${score}</div>
  `;
  utilities.printToDom('playBar', domString);
};

const addVideoGamesListener = () => {
  document.getElementById('videoGames').addEventListener('click', videoGameEvent);
};

const playPrinter = () => {
  const domString = `
  <h1>Play</h1>
  <div id='barWrapper'>
  <div id='playBar'>Joy Score = 50</div>
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

export default { playPrinter };
