const langArray = {
    'homeDescription': {
        'en': 'Go home to choose a different difficulty',
        'ru': 'Вернуться домой',
    },
    'easyDescription': {
        'en': 'Beginner-friendly challenges',
        'ru': 'Задачи для начинающих',
    },
    'normalDescription': {
        'en': 'Intermediate tasks for growth',
        'ru': 'Промежуточные задачи для роста',
    },
    'hardDescription': {
        'en': 'Challenging codes',
        'ru': 'Испытание кодов',
    },
    'harderDescription': {
        'en': 'Advanced trials',
        'ru': 'Продвинутые испытания',
    },
    'insaneDescription': {
        'en': 'Mind-bending tests',
        'ru': 'Умопомрачительные тесты',
    },
};

const langElements = document.querySelectorAll('.lang');
function switchLanguage() {
    const currentLanguage = langElements[0].textContent === langArray.homeDescription.en ? 'ru' : 'en';
    langElements.forEach((element) => {
       const translationKey = element.getAttribute('data-translate');
       element.textContent = langArray[translationKey][currentLanguage];
    });
}
const switchButton = document.getElementById('switcher');
switchButton.addEventListener('click', switchLanguage);