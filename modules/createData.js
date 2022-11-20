import { displayScores } from './score.js';

// API endpoints
const APIUrlEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Wo0RXIKXkeEmf9SZGldi/scores/';
const APIUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// DOM elements
const refreshBtn = document.getElementById('refresh-btn');
const form = document.getElementById('form');

const getGameId = async () => {
  // getting games from the endpoint
  const res = await fetch(APIUrl, {
    method: 'POST',
    body: JSON.stringify({ name: ' ' }),
    headers: { 'Content-Type': 'application/json' },
  });
  // get game data to json data
  await res.json();
};

// saving game data to the API end point
const saveScore = async (user, score) => {
  await fetch(APIUrlEndPoint, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: { 'Content-Type': 'application/json' },
  });
};

// get games from the API with the game ID
const getData = async () => {
  // const APIUrlEndPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Wo0RXIKXkeEmf9SZGldi/scores/`;
  const scores = await fetch(APIUrlEndPoint);
  return scores.json();
};

// Populate the games on refresh
refreshBtn.addEventListener('click', async () => {
  const scoreList = await getData();
  // display games in the browser
  displayScores(scoreList.result);
});

// submit form data to the API
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.name.value && form.score.value) {
    saveScore(form.name.value, form.score.value);
  }
  // clear form input after form submission
  form.reset();
});

export { getGameId, getData };