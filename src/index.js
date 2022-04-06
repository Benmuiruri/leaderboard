import './style.css';
import loadLeaderboard from '../modules/load-leaderboard';
import { addScore } from '../modules/add-score';

const form = document.querySelector('#add-new-score');
const refreshBtn = document.querySelector('#refresh');

document.addEventListener('DOMContentLoaded', () => {
  loadLeaderboard();
});

refreshBtn.addEventListener('click', () => {
  loadLeaderboard();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScore();
  loadLeaderboard();
  form.reset();
});
