
import i18next from 'i18next';
// Get the user's preferred language from localStorage or default to English
let language = localStorage.getItem('language') || 'en';

// Fetch translations based on the selected language
async function fetchTranslations(language) {
    try {
        const response = await fetch(`translations.json`);
        const translations = await response.json();
        return translations[language];
    } catch (error) {
        console.error('Error fetching translations:', error);
    }
}

// Function to change language
async function changeLanguage(lang) {
    language = lang;
    localStorage.setItem('language', lang);
    updateContent();
}

// Update content based on the selected language
async function updateContent() {
    const translations = await fetchTranslations(language);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations && translations[key]) {
            element.innerHTML = translations[key];
        }
    });
}

// Event listener for language buttons
document.querySelectorAll('.language').forEach(button => {
    button.addEventListener('click', function () {
        const lang = this.dataset.lang;
        changeLanguage(lang);
    });
});

// Initialize content based on the selected language
updateContent();
