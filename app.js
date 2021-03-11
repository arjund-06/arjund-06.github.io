let home = document.getElementById('home');
let about = document.getElementById('about');
let mySkills = document.getElementById("skills");

let homeBtn = document.getElementById('homeButton');
let aboutBtn = document.getElementById('aboutButton');
let mySkillsBtn = document.getElementById("skillButton");

function showHome() {
    home.classList.remove("hide");
    about.classList.add("hide");
    mySkills.classList.add("hide");

    homeBtn.classList.add("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.remove("set-border");
}

function showAbout() {
    home.classList.add("hide");
    about.classList.remove("hide");
    mySkills.classList.add("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.add("set-border");
    mySkillsBtn.classList.remove("set-border");
}

function showSkills() {
    home.classList.add("hide");
    about.classList.add("hide");
    mySkills.classList.remove("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.add("set-border");
}