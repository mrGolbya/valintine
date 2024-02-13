const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
const img = document.querySelector('img')

img.style.animationPlayState = 'running'


let buttonYesFontSize = 2;
let buttonNoFontSize = 2;
let counter = 0

let i = 0;
let txt = `Это моё необычное признание в любви, люблю тебя моя Настюша`; /* Текст */
let speed = 60; /* Скорость/длительность эффекта в миллисекундах */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.demo p').textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

buttonNo.addEventListener('click', (e) => {
    doYesMore();
    img.style.animationPlayState = 'paused'
    if(e.target){
        ++counter
        
    }
    if(counter== '1'){
        img.classList.add('shadow')
        img.src = 'images/1.jpg'

        

    }
    if(counter== '2'){
        img.src = 'images/2.jpg'
    }
    if(counter== '3'){
        img.src = 'images/3.jpg'
        buttonNo.remove()
    }
    
    
});

buttonYes.addEventListener('click', function () {
    buttonYesPushed();
});

function doYesMore () {
    
    buttonYesFontSize += .6;
    buttonYes.style.fontSize = buttonYesFontSize + 'em';

    buttonNoFontSize -= .3;
    buttonNo.style.fontSize = buttonNoFontSize + 'em';
    
}

function buttonYesPushed (){
    // document.querySelector('h1').remove()
    img.style.animationPlayState = 'paused'
    document.querySelector('.buttons').innerHTML =''
    document.querySelector('.images img').src = 'images/4.jpg'
    typeWriter()
    document.body.insertAdjacentHTML('beforeBegin',`<div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>
    <div class="heart"></div>`)
}