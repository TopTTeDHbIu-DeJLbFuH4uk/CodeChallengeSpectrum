const langArray = {
    'tittle': {
        'en': 'CodeChallengeSpectrum',
        'ru': 'Тест',
    },
    'HomeDescription': {
        'en': 'Go home to choose a different difficulty',
        'ru': 'Иди домой, чтобы выбрать другую сложность',
    },
    'EasyDescription': {
        'en': 'Beginner-friendly challenges',
        'ru': 'Задачи для начинающих',
    },
    'NormalDescription': {
        'en': 'Intermediate tasks for growth',
        'ru': 'Промежуточные задачи для роста',
    },
    'HardDescription': {
        'en': 'Challenging codes',
        'ru': 'Испытание кодов',
    },
    'HarderDescription': {
        'en': 'Advanced trials',
        'ru': 'Продвинутые испытания',
    },
    'InsaneDescription': {
        'en': 'Mind-bending tests',
        'ru': 'Умопомрачительные тесты',
    },
};

function translateText(lng) {
    const elementsToTranslate = document.querySelectorAll('.lng');

    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (langArray[key] && langArray[key][lng]) {
            element.textContent = langArray[key][lng];
        }
    });
}

document.querySelector('.drop-menu-sidebar-language').addEventListener('click', function () {
    const currentLang = document.documentElement.lang || 'en';
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    document.documentElement.lang = newLang;

    translateText(newLang);
});
