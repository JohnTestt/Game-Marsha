
 alert ( 'Olá, use espaço para pular. ' + ' Duvido você durar mais de 1 minuto. Boa sorte!');



const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 250) { // tamnhanho do salto
      // Descendo
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 2;
          dino.style.bottom = position + 'px';  // desce  mais rapido/devagar
        }
      }, 1);
    } else {
      // Subindo
      position += 1;
      dino.style.bottom = position + 'px';
    }
  }, 1);
}



function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
    
        // n sei se isso funciona corretaamente
        let leftInterval = setInterval(() => { 
        }, 1000)
      
        // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);


//urso



function createUrso() {
  const urso = document.createElement('div');
  let ursoPosition = 3000;
  let randomTime = Math.random() * 9000;

  if (isGameOver) return;

  urso.classList.add('urso');
  background.appendChild(urso);
  urso.style.left = ursoPosition + 'px';

  let leftTimer = setInterval(() => {
    if (ursoPosition < -80) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(urso);
    } else if (ursoPosition > 0 && ursoPosition < 80 && position < 80) { 
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      ursoPosition -= 10;
      urso.style.left = ursoPosition + 'px';
    }
  }, 30);

  setTimeout(createUrso, randomTime);
}

createUrso();
document.addEventListener('keyup', handleKeyUp);

// cronometro

