const mainContainer = document.getElementById('main-container');
// const dropRightMenu = document.getElementById('drop-right-menu');
mainContainer.addEventListener('mousemove', () => {
   mainContainer.style.width = '320px';
   mainContainer.style.transition = 'width 0.3s ease';
});

mainContainer.addEventListener('mouseout', () => {
   mainContainer.style.width = '50px';
});

const container = document.getElementById('container');
container.addEventListener('mousemove', () => {
   container.style.backgroundColor = '#2a2a2e';
   container.style.transition = 'width 0.3s ease';
   container.style.width = 'auto';
});

container.addEventListener('mouseout', () => {
   container.style.backgroundColor = '#121216';
   container.style.transition = 'width 0.3s ease';
});
