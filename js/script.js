const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const textResult = document.querySelector('.text-result');
textResult.innerHTML = `Pontuação: 0`;

var pontos = 0;

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const score = setInterval(() => {
    pontos += 5;
    textResult.innerHTML = `Pontuação: ${pontos}`;
},500);

const loop = setInterval(() => {    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +(window.getComputedStyle(mario).bottom.replace('px',''));

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
   
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./image/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        clearInterval(score);
    };
}, 10);

function start() {
       
    location.reload();
    
}

document.addEventListener("keydown", jump);
