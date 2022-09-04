let playerScore = 0;
let pcScore = 0;

function randomRPS(){
    let num = Math.round(Math.random()*10000)%3;
    if (num == 0){
        return "rock";
    }
    else if (num == 1){
        return "paper";
    }
    else if (num == 2){
        return "scissors";
    }
}

function firstStep(player){
    let pc = randomRPS();
    alert("player: "+player+" pc: "+pc);
    if (player == pc){
        return "draw";
    }
    if (player == "rock"){
        if (pc != "scissors"){
            return "playerLose";
        }
    }
    if (player == "paper"){
        if (pc != "rock"){
            return "playerLose";
        }
    }
    if (player == "scissors"){
        if (pc != "paper"){
            return "playerLose";
        }
    }
    else{
        return "playerWin";
    }
}

function secondStep(result){
    if (result == "draw"){
    }
    if (result == "playerWin"){
        playerScore++;
        alert("win");
    }
    if (result == "playerLose"){
        pcScore++;
        alert("lose");
    }
    document.querySelector("#player-div p").innerHTML="Player: "+playerScore;
    document.querySelector("#pc-div p").innerHTML="PC: "+pcScore;
}

function game(input){
    secondStep(firstStep(input));
}

document.querySelector("#player-div .button-r").onclick = function() {game("rock");};
document.querySelector("#player-div .button-p").onclick = function() {game("paper");};
document.querySelector("#player-div .button-s").onclick = function() {game("scissors");};


