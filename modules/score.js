const recentScores = [
  { id: 0, name: 'Seko', score: 100 },
  { id: 1, name: 'Ruben', score: 200 },
  { id: 2, name: 'Nicodemus', score: 300 },
  { id: 3, name: 'Simon', score: 400 },
  { id: 4, name: 'Nicholas', score: 200 },
];

const scoresContainer = document.getElementById('display-scores');
const displayScores = () => {
  recentScores.forEach((score) => {
    const content = `
      <li class="score"><span>${score.name}:</span> ${score.score} </li>
    `;
    scoresContainer.innerHTML += content;
  });
};

export default displayScores;
