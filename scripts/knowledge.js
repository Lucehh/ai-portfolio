const el = document.getElementById('knowledge-screen');
el.classList.add('fade-in');
el.classList.remove('fade-out');

function back() {
    const el = document.getElementById('knowledge-screen');
    el.classList.add('fade-out');
    el.classList.remove('fade-in');

    setTimeout(function() {
        window.location.href = "../pages/map.html";
    }, 1300);
}

function hide() {
    var middle = document.getElementsByClassName("middle"); 
    for(var i = 0; i < middle.length; i++){
        middle[i].style.display = "none";
    }
    var goleft = document.getElementsByClassName("goleft"); 
    for(var i = 0; i < goleft.length; i++){
        goleft[i].style.display = "none";
    }
    var goright = document.getElementsByClassName("goright"); 
    for(var i = 0; i < goright.length; i++){
        goright[i].style.display = "none";
    }
}

function show(iden) {
    hide();
    document.getElementById(`slides${iden}-info`).style.display="flex";
    if (iden > 8) {
        document.getElementById(`slides${iden}-left`).style.display="flex";
    }
    document.getElementById(`slides${iden}-right`).style.display="flex";
    
}
