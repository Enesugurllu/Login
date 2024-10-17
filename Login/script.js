
function changeLanguage(language) {
const texts = {
    en: {
        signIn: "Sign In",
        welcome: "Welcome, Please Sign In!",
        staffLogin: "Staff Login",
        guestLogin: "Guest Login",
        checkbox1: "I Accept the Agreement.",
        checkbox2: "I Allow to Share My Information.",
    },
    tr: {
        signIn: "Giriş Yap",
        welcome: "Hoş geldiniz, Lütfen Giriş Yapınız!",
        staffLogin: "Personel Girişi",
        guestLogin: "Misafir Girişi",
        checkbox1: "Sözleşmeyi Kabul Ediyorum.",
        checkbox2: "Bigilerimi Paylaşmaya İzin Veriyorum.",
    },
    de: {
        signIn: "Einloggen",
        welcome: "Willkommen, bitte melden Sie sich an!",
        staffLogin: "Mitarbeiter Login",
        guestLogin: "Gast Login",
        checkbox1: "Ich akzeptiere die Vereinbarung.",
        checkbox2: "Ich erlaube die Weitergabe meiner Informationen.",
    }
};

document.querySelector('.sign-in').innerText = texts[language].signIn;
document.querySelector('.welcome-text').innerText = texts[language].welcome;
document.querySelector('.button.staff').innerText = texts[language].staffLogin;
document.querySelector('.button.guest').innerText = texts[language].guestLogin;
document.querySelectorAll('.checkbox-container label')[0].innerText = texts[language].checkbox1;
document.querySelectorAll('.checkbox-container label')[1].innerText = texts[language].checkbox2;

const flagSrc = {
    en: 'assets/image/eng.png',
    tr: 'assets/image/tr.jpg',
    de: 'assets/image/alm.jpg'
};

document.querySelector('.language-selector img').src = flagSrc[language];
}