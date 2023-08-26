// style main container
const mainContainer = document.getElementById('main-container');
mainContainer.addEventListener('mousemove', () => {
   mainContainer.style.width = '320px';
   mainContainer.style.transition = 'width 0.3s ease';
});

mainContainer.addEventListener('mouseout', () => {
   mainContainer.style.width = '50px';
});

// container unrated
const containerUnrated = document.getElementById('container-unrated');
containerUnrated.addEventListener('mousemove', () => {
   containerUnrated.style.backgroundColor = '#2a2a2e';
   containerUnrated.style.transition = 'width 0.3s ease';
   containerUnrated.style.width = 'auto';
   containerUnrated.style.cursor = 'pointer';
});

containerUnrated.addEventListener('mouseout', () => {
   containerUnrated.style.backgroundColor = '#121216';
   containerUnrated.style.transition = 'width 0.3s ease';
});

// style difficult
const difficult = document.getElementById('difficult');
mainContainer.addEventListener('mouseenter', () => {
   difficult.style.color = '#8e8f8f';
   difficult.style.transition = '0.2s ease';
});

mainContainer.addEventListener('mouseleave', () => {
   difficult.style.color = 'transparent';
});

// home
const home = document.getElementById('home');
const homeText = document.getElementById('home-text');
mainContainer.addEventListener('mousemove', () => {
   home.style.color = '#c1c1c1';
   home.style.transition = '0.5s ease';
   home.style.zIndex = '1';

   homeText.style.color = '#c1c1c1';
   homeText.style.transition = '0.5s ease';
});

mainContainer.addEventListener('mouseout', () => {
   home.style.color = 'transparent';
   home.style.transition = '0.001s ease';
   home.style.zIndex = '-1';

   homeText.style.color = 'transparent';
   homeText.style.transition = '0.001s ease';
});

// difficult easy [container]
const containerEasy = document.getElementById('container-easy');
containerEasy.addEventListener('mousemove', () => {
   containerEasy.style.backgroundColor = '#2a2a2e';
   containerEasy.style.transition = 'width 0.3s ease';
   containerEasy.style.width = 'auto';
});

containerEasy.addEventListener('mouseout', () => {
   containerEasy.style.backgroundColor = '#121216';
   containerEasy.style.transition = 'width 0.3s ease';
});

// difficult easy [text]
const difficultEasy = document.querySelector('.difficult-easy');
const textDifficultEasy = document.querySelector('.text-difficult-easy');
mainContainer.addEventListener('mousemove', () => {
   difficultEasy.style.color = '#c1c1c1';
   difficultEasy.style.transition = '0.5s ease';
   difficultEasy.style.zIndex = '1';

   textDifficultEasy.style.color = '#c1c1c1';
   textDifficultEasy.style.transition = '0.5s ease';
   textDifficultEasy.style.zIndex = '1';
});

mainContainer.addEventListener('mouseout', () => {
   difficultEasy.style.color = 'transparent';
   difficultEasy.style.transition = '0.001s ease';
   difficultEasy.style.zIndex = '-1';

   textDifficultEasy.style.color = 'transparent';
   textDifficultEasy.style.transition = '0.001s ease';
   textDifficultEasy.style.zIndex = '-1';
});