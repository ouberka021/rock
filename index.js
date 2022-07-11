var  NumOfDrum = document.querySelectorAll('.drum').length;
cont computerChoiceDisplay = document.getElementById('computer-choice');
cont userChoiceDisplay  = document.getElementById('your-choice');
cont resultDisplay  = document.getElementById('result');
const possibleChoises = document.querySelectorAll('button');
let userChoice
let computerChoice
let result
for (var i = 0; i < NumOfDrum; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
//sound key 
var ButtonCont = this.innerHTML;
       makeSound(ButtonCont);
         
        //  this.style.color = "white";
        //  this.style.background = "#000"
        //computerPlay
        //"You Lose! Paper beats Rock"
     });
     
}
possibleChoises.forEach(possibleChoice.addEventListener("click", (e) => {
     userChoice = e.targer.id
    userChoiceDisplay.innerHTML = userChoice
    getResult()
    genecomputerChoice()
}))
function genecomputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        computerChoice = "rock"
    }
    if (randomNumber == 2) {
        computerChoice = "scissors"
    }
    if (randomNumber == 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = compterChoice
 
}
function getResult(){
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if (ccomputerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!'
    }
    if (ccomputerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    if (ccomputerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
    }
    if (ccomputerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    if (ccomputerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lost!'
    }
   resultDisplay.innerHTML = result;

}
//function sound key 
function makeSound(key){
    
    if(key == "Rock"){
        var audio = new Audio('sounds/click-47609.mp3');
        audio.play();
    }else if(key == "Paper"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }else{
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();  
    }
 
}