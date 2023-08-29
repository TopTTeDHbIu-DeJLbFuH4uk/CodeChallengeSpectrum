const containerPopupModalWindowEasy = document.getElementById('containerPopupModalWindowEasy');
containerEasy.addEventListener('click', () => {
   containerPopupModalWindowEasy.style.display = 'block';
   console.log(containerPopupModalWindowEasy)
});

const closeWindow = document.getElementById('closeWindowEasy');
closeWindow.addEventListener('click', () => {
   containerPopupModalWindowEasy.style.display = 'none';
})