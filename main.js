const currentTime = document.querySelector('.date');
const gameBtn = document.querySelector('.startButton');
const popUp = document.querySelector('.pop-up');
const popUpReplay = document.querySelector('.replayButton');
const popUpExit = document.querySelector('.exitButton');

let started = false;
let drink = undefined;

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
})
popUpExit.addEventListener('click',()=>{
    // finishGame();
    console.log('game over');
})

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + ' / ' + dd + ' / ' + yyyy;
currentTime.innerText = today;

function startGame(){
    started = true;
    showStopButton();
   // showRandomDrink();
   console.log('start game');
    
}

function stopGame(){
    started = false;
    showPopUpBtns();
    hideStopButton();
}

// function finishGame(){
//     started = false;
//     showPup
// }

function showStopButton(){
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('.fa-play');
    gameBtn.style.visibility= 'visible';    
}
// function showStartBtn(){
//     gameBtn.style.visibility= 'visible';  
// }

function hideStopButton(){
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
function initLottery(){

}