const languageEN = document.querySelector('.language-EN');
const languageRU = document.querySelector('.language-RU');

languageRU.addEventListener('click', () => {
    if (languageRU.innerHTML === 'Russian Language RU') {
        languageRU.innerHTML = 'English Language EN';
        languageEN.innerHTML = 'RU';
    } else {
        languageRU.innerHTML = 'Russian Language RU';
        languageEN.innerHTML = 'EN';
    }
});

function redirectToGitHub() {
    window.open('https://github.com/TopTTeDHbIu-DeJLbFuH4uk/CodeChallengeSpectrum', 'blank').focus();
}

function redirectToGitHubKirillPerson() {
    window.open('https://github.com/MRGRD56', 'blank').focus();
}