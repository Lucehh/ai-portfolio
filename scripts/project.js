const el = document.getElementById('project-screen');
el.classList.add('fade-in');
el.classList.remove('fade-out');

function back() {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/map.html";
    }, 1300);
}

function hide() {
    var projmiddle = document.getElementsByClassName("projmiddle"); 
    for(var i = 0; i < projmiddle.length; i++){
        projmiddle[i].style.display = "none";
    }
    document.getElementById('down-button').style.display="none"
}

function show(iden) {
    hide();
    if (iden == 11) {
        document.getElementById("down-button").style.display="flex";
    }
    document.getElementById(`info${iden}`).style.display="flex";
}