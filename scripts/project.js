const el = document.getElementById('project-screen');
el.classList.add('fade-in');
el.classList.remove('fade-out');

function back() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/map.html";
    }, 1400);
}