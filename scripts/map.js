const el = document.getElementById('main-screen');
el.classList.add('fade-in');
el.classList.remove('fade-out');

function back() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../index.html";
    }, 1400);
}

function intro() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/intro.html";
    }, 1400);
}

function knowledge() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/knowledge.html";
    }, 1400);
}

function debate() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/debate.html";
    }, 1400);
}

function project() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/project.html";
    }, 1400);
}