const scoresContainer = document.getElementById('display-scores');
export const displayScores = (recentScores) => {
  scoresContainer.innerHTML = '';
  recentScores.forEach((score) => {
    const content = `
      <li class="score"><span>${score.user}:</span> ${score.score} </li>
    `;
    scoresContainer.insertAdjacentHTML('beforeend', content);
  });
};

export default { displayScores };
