const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

//Reiniciar o jogo
let gameOver = false;

// função para pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)
}
// loop do jogo
const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <111) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '85px'
        mario.style.marginLeft = '50px'

        document.querySelector('.gameover').style.display = 'block';
        gameOver = true;
        clearInterval(loop); 

    } 

 }, 10);          

document.addEventListener('keydown', jump);
document.addEventListener('click', () => {
    if (gameOver) {
        location.reload();
    }
})