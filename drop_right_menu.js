const mainContainer = document.getElementById('main-container');
const dropRightMenu = document.getElementById('drop-right-menu');
const logo = document.querySelector('.logo');

// open drop right menu
mainContainer.addEventListener('mousemove', function () {
    dropRightMenu.style.display = 'block';
})

// close drop right menu
mainContainer.addEventListener('mouseout', function () {
    dropRightMenu.style.display = 'none';
})