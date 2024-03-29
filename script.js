const quadro = document.getElementById('pixel-board');
let firstColor = document.getElementById('vermelha');
let secondColor = document.getElementById('amarela');
let thirdColor = document.getElementById('verde');
let colorPalette = document.getElementById('color-palette');
let tamanhoDinamicoquadro = document.getElementsByClassName('pixel');
let boardSize = document.getElementById('board-size');
const vqv = document.getElementById('generate-board');

function criarquadro() {
 for (let index = 0; index < 25; index += 1) {
  const quadroTamanho = document.createElement('div');
  quadroTamanho.className = 'pixel';
  quadro.appendChild(quadroTamanho);
  }; 
}
criarquadro();

function quadroDinamico () {
  for (let i = 0; i < boardSize.innerText.length; i += 1) {
    let dinamicoQuadro = document.createElement('div');
    dinamicoQuadro.className = 'pixel';
    quadro.appendChild(dinamicoQuadro);
  }
}

vqv.addEventListener('click', quadroDinamico);

const corInicial = document.querySelector('#preta');
function classPreta() {
  corInicial.classList.add('selected');
}
classPreta();

const deleteSelected = document.querySelector('#color-palette');

function changeSelected(event) {
 const classDelet = document.getElementsByClassName('color');
 if (event.target.className.includes('color')) {
  for (let index = 0; index < classDelet.length; index += 1) {
   classDelet[index].classList.remove('selected');
   event.target.classList.add('selected');
   }
 }
}
deleteSelected.addEventListener('click', changeSelected);

let mudaCor = document.getElementsByClassName('pixel');
for (let i = 0; i < mudaCor.length; i += 1){
    mudaCor[i].addEventListener('click', funcCor);
}

function funcCor (event) {
    let clicar = document.querySelector('.selected');
    let cor = getComputedStyle(clicar); 
        event.target.style.backgroundColor = cor.backgroundColor;
};

function criatButton(string){
    let buttonReset = document.querySelector('#butao');
    let btn = document.createElement('button');
    btn.id = 'clear-board';
    btn.innerHTML = string;
    buttonReset.appendChild(btn);
  };
  criatButton('Limpar');

  const back = document.getElementById('clear-board');
  back.addEventListener('click', backoriginal)
  
  function backoriginal(event){
  let pixelOriginal = document.getElementsByClassName('pixel');
    
    for (index = 0; index < pixelOriginal.length; index += 1){
      let color = pixelOriginal[index];
        color.style.backgroundColor = 'white';
    }
  }

window.onload = function colorGenerate() {
  let random1 = '#'+Math.floor(Math.random()*16777215).toString(16);
  let random2 = '#'+Math.floor(Math.random()*16777215).toString(16);
  let random3 = '#'+Math.floor(Math.random()*16777215).toString(16);
  firstColor.style.backgroundColor = random1;
  secondColor.style.backgroundColor  = random2;
  thirdColor.style.backgroundColor  = random3;
}