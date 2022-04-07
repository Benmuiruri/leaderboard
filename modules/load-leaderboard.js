import { getScore } from './add-score';

const scoreList = document.querySelector('.current-scores');

export default async () => {
  scoreList.innerHTML = '<p class="loading">Loading Leaderboard...</p>';
  const leaders = await getScore();
  const rankedLeaders = leaders.sort((a, b) => b.score - a.score);

  let leaderBoard = '';
  rankedLeaders.forEach(({ user, score }) => {
    leaderBoard += `<li class="score-item"><i class="fa-solid fa-user-astronaut"></i><span class="user-name">${user}</span> <span class="user-score">${score}</span></li>`;
  });

  scoreList.innerHTML = leaderBoard;
};
