const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;
let counter = 0



buttonNo.addEventListener('click', (e) => {
    doYesMore();
    if(e.target){
        ++counter
    }
    if(counter== '1'){
        document.querySelector('h1').textContent = 'Я тебя люблю'
    }
    if(counter== '2'){
        console.log(2)
    }
    if(counter== '9'){
        buttonNo.remove()
    }
    if(counter== '10'){
        buttonNo.remove()
    }
    
});

buttonYes.addEventListener('click', function () {
    buttonYesPushed();
});

function doYesMore () {
    buttonYesFontSize += .4;
    buttonYes.style.fontSize = buttonYesFontSize + 'em';

    buttonNoFontSize -= .2;
    buttonNo.style.fontSize = buttonNoFontSize + 'em';
document.querySelector('.images img').src = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5-%D1%81-svg-jpg-valentines-%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%BE%D0%B5-doodle-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%87%D0%BA%D0%BE-%D0%BA%D0%B8%D1%81%D1%82%D1%8C-%D1%81%D0%B2%D0%B8-%D0%B8-%D0%B8%D0%B8%D0%B0%D0%B8%D0%B8%D0%B8%D0%B8-229451473.jpg'
}

function buttonYesPushed (){
    // document.querySelector('h1').remove()
    document.body.insertAdjacentHTML('afterbegin',`<div class="typewriter"><p>tydjyjcghjgyjgy</p></div>`)
    document.querySelector('.typewriter p').style.animationPlayState = 'running'
    // document.querySelector('.typewriter').textContent = 'rrrrrrrrrrrrrrrrrr'
    document.querySelector('.buttons').innerHTML =''
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