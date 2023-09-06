const modalWindowDifficultEasy = document.getElementById('modalWindowDifficultyEasy');
const containerModalWindowEasyDifficult = document.getElementById('containerModalWindowEasyDifficult');
modalWindowDifficultEasy.addEventListener('click', () => {
   containerModalWindowEasyDifficult.style.display = 'block';
});

const closeWindow = document.querySelector('.close-btn');
closeWindow.addEventListener('click', () => {
   containerModalWindowEasyDifficult.style.display = 'none';
});

function redirectToPageEasyDifficult() {
   window.open('http://localhost:63342/CodeChallengeSpectrum/difficult_easy.html?_ijt=an4f5pfjg86msk1udju0albvos&_ij_reload=RELOAD_ON_SAVE', '_self');
}
