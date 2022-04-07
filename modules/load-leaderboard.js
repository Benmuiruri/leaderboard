import { getScore } from './add-score';

const scoreList = document.querySelector('.current-scores');

export default async () => {
  scoreList.innerHTML = '<p>Loading Leaderboard...</p>';
  const leaders = await getScore();
  const rankedLeaders = leaders.sort((a, b) => b.score - a.score);

  let leaderBoard = '';
  rankedLeaders.forEach(({ user, score }) => {
    leaderBoard += `<li class="score-item"><i class="fa-solid fa-user-astronaut"></i>${user}: ${score}</li>`;
  });

  scoreList.innerHTML = leaderBoard;
};
