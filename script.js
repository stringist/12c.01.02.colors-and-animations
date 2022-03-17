"use strict";

// const changeThemeToDark = () => {
//     document.documentElement.setAttribute("data-theme", "dark"); //set theme to light
// }

// const changeThemeToLight = () => {
//     document.documentElement.setAttribute("data-theme", "light"); //set theme to light
// }

document.querySelector("#toggle_button").addEventListener("click", changeTheme);

function changeTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
        document.documentElement.setAttribute("data-theme", "light");
        console.log("change theme to light")
    }
    if (window.matchMedia("(prefers-color-scheme: light)")) {
        document.documentElement.setAttribute("data-theme", "dark");
        console.log("change theme to dark")
    }
}

// function toggleDarkMode() {
//     if (document.documentElement.classList.contains("light")) {
//         document.documentElement.classList.remove("light")
//         document.documentElement.classList.add("dark")
//     } else if (document.documentElement.classList.contains("dark")) {
//         document.documentElement.classList.remove("dark")
//         document.documentElement.classList.add("light")
//     } else {
//         if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             document.documentElement.classList.add("light")
//         } else {
//             document.documentElement.classList.add("dark")
//         }
//     }
// }