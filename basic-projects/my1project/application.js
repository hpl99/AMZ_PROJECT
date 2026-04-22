const x = document.querySelector(".circle")
const y = document.querySelector(".ciircle")
const z = document.querySelector(".cirrcle")

let choice = ""
let playerScore = 0
let computerScore = 0

let playerScoreText = document.querySelector(".playerScore")
let computerScoreText = document.querySelector(".computerScore")
let result = document.querySelector(".result")

let flag = false ;
let intervalId = null;

function Autoplay(){
      if(intervalId === null){
        flag = true;
        intervalId= setInterval(function(){
            let randomNumber = Math.floor(Math.random()*3);
            let c = choices[randomNumber];
            playGame(c);
        },1000);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
}

const choices = ["rock","paper","scissors"]

x.addEventListener("click", function () {
    console.log("selected rock")
    choice = "rock"
    x.style.backgroundColor = "blue"
    playGame(choice)
})

y.addEventListener("click", function () {
    console.log("selected paper")
    choice = "paper"
    y.style.backgroundColor = "yellow"
    playGame(choice)
})

z.addEventListener("click", function () {
    console.log("selected scissors")
    choice = "scissors"
    z.style.backgroundColor = "red"
    playGame(choice)
})

function playGame(userChoice){

let randomNumber = Math.floor(Math.random()*3);
let computerChoice = choices[randomNumber];

if(userChoice === computerChoice){
result.textContent = "Tie! Computer chose " + computerChoice;
}

else if(
(userChoice === "rock" && computerChoice === "scissors") ||
(userChoice === "paper" && computerChoice === "rock") ||
(userChoice === "scissors" && computerChoice === "paper")
){
playerScore++;
playerScoreText.textContent = playerScore;

result.textContent = "You Win! Computer chose " + computerChoice;
}

else{
computerScore++;
computerScoreText.textContent = computerScore;

result.textContent = "Computer Wins! Computer chose " + computerChoice;
}

}