'use strict';
const currentTime = document.querySelector('.date');
const gameBtn = document.querySelector('.startButton');
const popUp = document.querySelector('.pop-up');
const popUpReplay = document.querySelector('.replayButton');
const popUpExit = document.querySelector('.exitButton');
const field = document.querySelector('.field');
const icon = gameBtn.querySelector('.fas');
const img = document.createElement('img');

let started = false;
let showRandomImg;

gameBtn.addEventListener('click', ()=> {
    if(started){
        stopGame();
    }else{
        startGame();
    }
});

popUpReplay.addEventListener('click',()=>{
    startGame();
    hidePopUpBtns();
});

popUpExit.addEventListener('click',()=>{
   
    console.log('game over');
    hidePopUpBtns();
    init();
});


function startGame(){
    started = true;
    showStopBtn();
    initGame();
    showRandomImg = setInterval(()=>{
       getRandom();
    },100);
   
}

function stopGame(){
    started = false;
    
    showPopUpBtns();
    hideStopBtn();
    stopImg();
}

function createImg(number){
img.setAttribute('src', `imgs/${number}.png`);
img.setAttribute('class','drinks_name');
field.append(img);

}
function getRandom(){
    const IMG_NUM = 17;
    let num = Math.floor(Math.random() * IMG_NUM)+1;
    createImg(num);

}

function showStopBtn(){
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility= 'visible';    
}
 function showStartBtn(){
     icon.classList.remove('fa-stop');
     icon.classList.add('fa-play');
    gameBtn.style.visibility= 'visible'; 
}

//나중에 showStopButton과 showStartBtn을 if문으로 표현 할 수 있을 것 같애
function hideStopBtn(){
    gameBtn.style.visibility ='hidden';
}

function showPopUpBtns(){
    popUp.classList.remove('pop-up--hide');
}
function hidePopUpBtns(){
    popUp.classList.add('pop-up--hide');
}
function goBackFirst(){
    showStartBtn();
    hidePopUpBtns();
    
}
function stopImg(){
    clearInterval(showRandomImg);
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + ' / ' + dd + ' / ' + yyyy;
currentTime.innerText = today;

function init(){
    field.removeChild(img);
    showStartBtn();
}

function initGame(){
    clearInterval(showRandomImg);
}