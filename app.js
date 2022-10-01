let home = document.getElementById('home');
let about = document.getElementById('about');
let mySkills = document.getElementById("skills");
let events = document.getElementById("events");
let contactMe = document.getElementById("contact");

let homeBtn = document.getElementById('homeButton');
let aboutBtn = document.getElementById('aboutButton');
let mySkillsBtn = document.getElementById("skillButton");
let eventsBtn = document.getElementById("eventsButton");
let contactMeBtn = document.getElementById("contactButton");

const db = firebase.firestore();

function showHome() {
    home.classList.remove("hide");
    about.classList.add("hide");
    mySkills.classList.add("hide");
    // events.classList.add("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.add("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.remove("set-border");
    // eventsBtn.classList.remove("set-border");
    contactMeBtn.classList.remove("set-border");
}

function showAbout() {
    home.classList.add("hide");
    about.classList.remove("hide");
    mySkills.classList.add("hide");
    // events.classList.add("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.add("set-border");
    mySkillsBtn.classList.remove("set-border");
    // eventsBtn.classList.remove("set-border");
    contactMeBtn.classList.remove("set-border");
}

function showSkills() {
    home.classList.add("hide");
    about.classList.add("hide");
    mySkills.classList.remove("hide");
    // events.classList.add("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.add("set-border");
    // eventsBtn.classList.remove("set-border");
    contactMeBtn.classList.remove("set-border");
}

function showEvents() {
    home.classList.add("hide");
    about.classList.add("hide");
    mySkills.classList.add("hide");
    // events.classList.remove("hide");
    contactMe.classList.add("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.remove("set-border");
    // eventsBtn.classList.add("set-border");
    contactMeBtn.classList.remove("set-border");

    getEvents();
}

function showContact() {
    home.classList.add("hide");
    about.classList.add("hide");
    mySkills.classList.add("hide");
    // events.classList.add("hide");
    contactMe.classList.remove("hide");

    homeBtn.classList.remove("set-border");
    aboutBtn.classList.remove("set-border");
    mySkillsBtn.classList.remove("set-border");
    // eventsBtn.classList.remove("set-border");
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

function getEvents() {
    let eventListId = document.getElementById('eventsList');
    db.collection("Events").get().then((eventList) => {
        eventList.forEach((eventItemsData) => {
            let eventItem = eventItemsData.data()
            eventListId.innerHTML += `
            <div class="row p-3 my-2 eventItems">
                <div class="col-md-4">
                    <img src="${eventItem.photoLink}" alt="event" width="100%">
                </div>
                <div class="col-md">
                    <h3 class="red my-3">${(eventItem.Name).toUpperCase()}</h3>
                    <table>
                        <tr>
                            <th>Platform:</th>
                            <td>${eventItem.SessionPlatform}</td>
                        </tr>
                        <tr>
                            <th>Link:</th>
                            <td> <a class="href" href="${eventItem.SessionLink}" target="_blank">${eventItem.SessionLink}</a></td>
                        </tr>
                        <tr>
                            <th>Date:</th>
                            <td>${eventItem.Date}</td>
                        </tr>
                        <tr>
                            <th>Time:</th>
                            <td>${eventItem.Time}</td>
                        </tr>
                    </table>
                </div>
            </div>
            `
        });
    });
}