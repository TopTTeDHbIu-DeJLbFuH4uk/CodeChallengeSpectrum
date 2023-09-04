const modalWindowDifficultEasy = document.getElementById('modalWindowDifficultyEasy');
const containerModalWindowEasyDifficult = document.getElementById('containerModalWindowEasyDifficult');
modalWindowDifficultEasy.addEventListener('click', () => {
   containerModalWindowEasyDifficult.style.display = 'block';
});

const closeWindow = document.querySelector('.close-btn');
closeWindow.addEventListener('click', () => {
   containerModalWindowEasyDifficult.style.display = 'none';
});