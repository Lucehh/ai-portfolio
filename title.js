function start() {
    const el = document.getElementById('title-screen');
    el.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = "map.html";
    }, 1400); 
}