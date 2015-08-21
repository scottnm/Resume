var headerBar = document.querySelector('#header-bar');
var contentLane = document.querySelector('#content-lane');


function prepPage() {
    contentLane.style.top = headerBar.clientHeight + 'px';
}

prepPage();
window.addEventListener('resize', prepPage());