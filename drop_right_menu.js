// Container unrated
const containerUnrated = document.querySelector('.container-unrated');
containerUnrated.addEventListener('mousemove', () => {
   containerUnrated.style.width = 'auto';
   containerUnrated.style.backgroundColor = '#2a2a2e';
   containerUnrated.style.display = 'block';
   containerUnrated.style.transition = 'width 0.3s ease';
});

containerUnrated.addEventListener('mouseout', () => {
   containerUnrated.style.backgroundColor = '#121216';
   containerUnrated.style.transition = 'width 0.3s ease';
});

// Container easy
const containerEasy = document.querySelector('.container-easy');
const difficultEasyLabel = document.querySelector('.difficult-easy-label');
containerEasy.addEventListener('mousemove', () => {
   containerEasy.style.width = 'auto';
   containerEasy.style.backgroundColor = '#2a2a2e';
   containerEasy.style.display = 'block';
   containerEasy.style.transition = 'width 0.3s ease';

   difficultEasyLabel.style.color = 'blue';
});

containerEasy.addEventListener('mouseout', () => {
   containerEasy.style.backgroundColor = '#121216';
   containerEasy.style.transition = 'width 0.3s ease';

   difficultEasyLabel.style.color = '';
});

// Container normal
const containerNormal = document.querySelector('.container-normal');
const difficultNormalLabel = document.querySelector('.difficult-normal-label');
containerNormal.addEventListener('mousemove', () => {
   containerNormal.style.width = 'auto';
   containerNormal.style.backgroundColor = '#2a2a2e';
   containerNormal.style.display = 'block';
   containerNormal.style.transition = 'width 0.3s ease';

   difficultNormalLabel.style.color = 'green';
});

containerNormal.addEventListener('mouseout', () => {
   containerNormal.style.backgroundColor = '#121216';
   containerNormal.style.transition = 'width 0.3s ease';

   difficultNormalLabel.style.color = '';
});

