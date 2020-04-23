let userScore = 0
let computerScore = 0
const rock_id = document.getElementById("rock")
const paper_id = document.getElementById("paper")
const scissors_id = document.getElementById("scissors")
const result_id = document.getElementById("result")
let userScore_id = document.getElementById("user-score")
let computerScore_id = document.getElementById("computer-score")

function getComputerChoice() {
    //generates computers choice
    weapon = ['r', 'p', 's'];
    return weapon[Math.floor(Math.random()*3)]
}   

function playerChoice() {
    //returns players choice upon click
    rock_id.addEventListener("click", function() {
        playRound("r");
    })
    paper_id.addEventListener("click", function() {
        playRound("p");
    })
    scissors_id.addEventListener("click", function() {
        playRound("s");
    })
}

function playRound(playerChoice) {
    //returns the user choice and computer choice together
    computerChoice = getComputerChoice();
    choices = playerChoice + computerChoice;
    switch (choices) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(playerChoice, computerChoice)
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            lose(playerChoice, computerChoice)
            break;
        default:
            tie(playerChoice, computerChoice)
    }
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerChoice, computerChoice) {
    result_id.innerHTML = `Aurai! ${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)} You Win!`
    userScore++;
    userScore_id.innerHTML = userScore;
}

function lose(playerChoice, computerChoice) {
    result_id.innerHTML = `Ah junk. ${convertToWord(computerChoice)} beats ${convertToWord(playerChoice)}. You Lose!`
    computerScore++
    computerScore_id.innerHTML = computerScore
}

function tie(playerChoice, computerChoice) {
    result_id.innerHTML = `It's a tie. ${convertToWord(playerChoice)} equals ${convertToWord(computerChoice)}. Try um again!`
}

playerChoice()
