let home = document.getElementById('home');
let about = document.getElementById('about');
let mySkills = document.getElementById("skills");
let contactMe = document.getElementById("contact");

let homeBtn = document.getElementById('homeButton');
let aboutBtn = document.getElementById('aboutButton');
let mySkillsBtn = document.getElementById("skillButton");
let contactMeBtn = document.getElementById("contactButton");

function showHome() {
    home.classList.remove("hide");
    about.classList.add("hide");
    mySkills.classList.add("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.add("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.remove("set-border");
    contactMeBtn.classList.remove("set-border");
}

function showAbout() {
    home.classList.add("hide");
    about.classList.remove("hide");
    mySkills.classList.add("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.add("set-border");
    mySkillsBtn.classList.remove("set-border");
    contactMeBtn.classList.remove("set-border");
}

function showSkills() {
    home.classList.add("hide");
    about.classList.add("hide");
    mySkills.classList.remove("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.add("set-border");
    contactMeBtn.classList.remove("set-border");
}

function showContact() {
    home.classList.add("hide");
    about.classList.add("hide");
    mySkills.classList.add("hide");
    contactMe.classList.remove("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.remove("set-border");
    contactMeBtn.classList.add("set-border");
}

emailjs.init("user_wcK7McpCmQM7d7LocqXE5");
form = document.getElementById('contact-form');

function sendEmail() {
    console.log('function started')
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    let details = {
        from_name: name,
        from_email: email,
        message: message,
    }

    emailjs.send('service_k58ppag', 'template_zfklqvb', details)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    form.reset();
}