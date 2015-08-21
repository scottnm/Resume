var headerBar = document.querySelector('#header-bar');
var contentLane = document.querySelector('#content-lane');


function prepPage() {
    contentLane.style.top = headerBar.clientHeight + 'px';
}

function unavailableAlert() {
    alert("This project is not available to view online, please contact me for source code or other information.");
}

function renderResume() {
    var html = Handlebars.templates['welcome'](welcomeData);
    html += Handlebars.templates['work-experience'](workData);
    html += Handlebars.templates['projects'](projectData);
    html += Handlebars.templates['education'](educationData);
    contentLane.innerHTML = html;
}

prepPage();
window.addEventListener('resize', prepPage());
renderResume();
