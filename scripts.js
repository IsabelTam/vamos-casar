const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get the user's theme preference from local storage, if it's available
const storedTheme = localStorage.getItem("theme");

const computedTheme = storedTheme || (prefersDarkScheme.matches ? "dark" : "light");
// If the user's preference in localStorage is dark...
if (computedTheme === "dark") {
    // ...let's toggle the .dark-theme class on the body
    document.body.classList.toggle("dark-theme");
}
localStorage.setItem("theme", computedTheme);

// change language
function toggleLang() {
    let currentLang = document.documentElement.lang;
    currentLang === "pt" ? currentLang = "en" : currentLang = "pt";

    elements = document.querySelectorAll(":not(html)[lang]");
    for (let element of elements) element.style.display = 'none';

    elements = document.querySelectorAll(`:not(html)[lang=${currentLang}]`);
    for (let element of elements) element.style.display = 'block';

    document.documentElement.setAttribute('lang', currentLang);
}

// toggle light/dark mode
function toggleLight() {
    const darkTheme = document.body.classList.contains("dark-theme");
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", darkTheme ? "light" : "dark");
}

// responsive menu
function menu() {
    document.getElementById("nav").classList.toggle("responsive");
}

function RSVP() {
    console.log("boop");
}