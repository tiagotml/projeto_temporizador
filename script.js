let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let stop = document.querySelector('.stop');

play.addEventListener('click', () => {
    HandleToggle();
});
pause.addEventListener('click', () => {
    HandleToggle();
});

function HandleToggle() {
    play.classList.toggle('hide');
    pause.classList.toggle('hide');
}

