const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameID = '7398sdwSTt99VZIWW';
const endPoint = `${URL}/games/${gameID}/scores/`;

const addScore = async () => {
  const response = await fetch(endPoint, {
    method: 'POST',git 
    body: JSON.stringify({
      user: userName.value.trim(),
      score: userScore.value.trim(),
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = response.json();
  return data;
};

const getScore = async () => {
  const res = await fetch(endPoint);
  const data = await res.json();
  const { result } = data;
  return result;
};

export { addScore, getScore };
