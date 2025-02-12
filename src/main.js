function show() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
    document.getElementById('vidBtn')
        .style.display = "block";    
}

function getRickRolled() {
    /* Access video by id and change 
    the display property to block*/
    document.getElementById('video')
        .style.display = "block";
    document.getElementById('vidBtn')
        .style.display = "none";
}