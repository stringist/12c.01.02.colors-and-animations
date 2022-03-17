"use strict";

window.addEventListener("load", readTheme);

function readTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
        document.documentElement.classList.add("dark-mode");
    }
}
const button = document.querySelector("#toggle_button");

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

toggleDarkMode(useDark.matches);

function toggleDarkMode(state) {
    console.log("Dark mode activated");
    console.log(state);

    document.documentElement.classList.toggle("dark-mode", state);
}

useDark.addListener((evt) => toggleDarkMode(evt.matches));

button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    console.log("overridden");
});

if (useDark.matches) {
    button.checked = true;
}