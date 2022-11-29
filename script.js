function modeChange() {
    document.getElementById('body').classList.add('nmode');
    document.getElementById('night-mode').classList.add('remove');
    document.getElementById('day-mode').classList.remove('remove');
}
function dModeChange() {
    document.getElementById('body').classList.remove('nmode');
    document.getElementById('night-mode').classList.remove('remove');
    document.getElementById('day-mode').classList.add('remove');
}
function popUp() {
    console.log('button clicked');
    document.getElementById('pop-container').classList.add('active');
    document.getElementById('back').classList.add('active');
}

function closefn() {
    console.log('button clicked');
    document.getElementById('pop-container').classList.remove('active');
    document.getElementById('back').classList.remove('active');
}