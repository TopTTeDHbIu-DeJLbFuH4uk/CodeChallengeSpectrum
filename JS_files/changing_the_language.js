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
    'descriptionDifficultEasy': {
        'en': 'The Easy difficulty level on our website is the perfect starting point for those who are just beginning their journey into the world of tasks and challenges. Here, you will find puzzles and tasks that provide an inspiring challenge but won\'t be overly difficult. With this level of difficulty, you can familiarize yourself with basic concepts and patterns, which will gradually help you develop your skills and move on to more serious challenges. Raise the bar of your knowledge with ease and confidence as you prepare for more complex trials ahead.',
        'ru': 'Сложность Easy на нашем сайте - это идеальное начало для тех, кто только начинает свой путь в мире задач и заданий. Здесь вы найдете головоломки и задачи, которые представляют собой вдохновляющий вызов, но не будут чрезмерно сложными. С этой сложностью вы сможете познакомиться с основными концепциями и шаблонами, что поможет вам постепенно развивать свои навыки и переходить к более серьезным вызовам. Поднимите планку своих знаний с легкостью и уверенностью, готовясь к более сложным испытаниям впереди.',
    },
    'knowledgeRequirements': {
        'en': 'This level requires knowledge such as:',
        'ru': 'Данный уровень требует таких знаний как:',
    },
    // Descriptions difficult Easy
    'variablesDescription': {
        'en': 'Variables: Understanding that variables are containers for storing data, such as numbers and strings.',
        'ru': 'Переменные: Понимание, что переменные - это контейнеры для хранения данных, таких как числа и строки.'
    },
    'operationsDescription': {
        'en': 'Operations: Basic arithmetic operations, such as addition, subtraction, multiplication, and division.',
        'ru': 'Операции: Базовые арифметические операции, такие как сложение, вычитание, умножение и деление.',

    },
    'conditionsDescription': {
        'en': 'Conditions: Basics of using conditional statements (if, else) to make choices based on conditions.',
        'ru': 'Условия: Основы использования условных операторов (if, else), чтобы сделать выбор в зависимости от условий.',
    },
    'loopsDescription': {
        'en': 'Loops: Simple loops, such as for or while loops, for repeating specific actions multiple times.',
        'ru': 'Циклы: Простые циклы, такие как циклы for или while, для повторения определенных действий несколько раз.',
    },
    'arraysDescription': {
        'en': 'Arrays: Fundamentals of working with arrays (lists), including creation, adding elements, and accessing them.',
        'ru': 'Массивы: Основы работы с массивами (списками), включая создание, добавление элементов и доступ к ним.',
    },
    'functionsDescription': {
        'en': 'Functions: Creating and using functions to group code and facilitate reuse.',
        'ru': 'Функции: Создание и использование функций для группировки кода и повторного использования.',
    },
    'inputOutputBasicsDescription': {
        'en': 'Input-Output Basics: Inputting data from the keyboard and displaying results on the screen.',
        'ru': 'Основы ввода-вывода: Ввод данных с клавиатуры и вывод результатов на экран.',
    },
    'simpleAlgorithmicProblemsDescription': {
        'en': 'Simple Algorithmic Problems: Solving problems related to basic mathematical operations, strings, and conditional statements.',
        'ru': 'Простые алгоритмические задачи: Решение задач, связанных с простыми математическими операциями, строками и условными операторами.',
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