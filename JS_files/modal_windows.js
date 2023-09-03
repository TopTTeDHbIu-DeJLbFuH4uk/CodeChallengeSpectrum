const modalWindowDifficultyEasy = document.getElementById('modalWindowDifficultyEasy');
const containerPopupModalWindowEasy = document.getElementById('containerPopupModalWindowEasy');
modalWindowDifficultyEasy.addEventListener('click', () => {
   containerPopupModalWindowEasy.style.display = 'block';
});

const closeWindow = document.querySelector('.btn-close-easy');
closeWindow.addEventListener('click', () => {
   containerPopupModalWindowEasy.style.display = 'none';
});