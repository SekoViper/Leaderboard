import { displayScores } from './score';

const refreshBtn = document.getElementById('refresh-btn');
const form = document.getElementById('form');
let gameId;

const getGameId = async () => {
  // API url
  const APIUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  // getting games from the endpoint
  const game = await fetch(APIUrl, {
    method: 'POST',
    body: JSON.stringify({ name: ' ' }),
    headers: { 'Content-type': 'application/json' },
  });
  // get game data to json data
  const gameJson = await game.json();
  // got the game id
  gameId = gameJson.result.match(/[a-zA-Z0-9]{20}/).join('');
};

// get games from the API with the game ID
const getData = async () => {
  const APIUrlEndPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const scores = await fetch(APIUrlEndPoint);
  return scores.json();
};

// Populate the games on refresh
refreshBtn.addEventListener('click', async () => {
  const scoreList = await getData();
  // display games in the browser
  displayScores(scoreList.result);
});

// saving game data to the API end point
const saveScore = async (user, score) => {
  const APIUrlEndPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  await fetch(APIUrlEndPoint, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: { 'Content-type': 'application/json' },
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.name.value && form.score.value) {
    saveScore(form.name.value, form.score.value);
    form.value = '';
  }
});

export { getGameId, getData };