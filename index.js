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

function pictureChanger(player, pc){
    if (player == "rock"){
        document.querySelector("#player-div img").src="./images/rock.png";
    }
    if (player == "paper"){
        document.querySelector("#player-div img").src="./images/paper.png";
    }
    if (player == "scissors"){
        document.querySelector("#player-div img").src="./images/scissors.png";
    }
    if (pc == "rock"){
        document.querySelector("#pc-div img").src="./images/rock.png";
    }
    if (pc == "paper"){
        document.querySelector("#pc-div img").src="./images/paper.png";
    }
    if (pc == "scissors"){
        document.querySelector("#pc-div img").src="./images/scissors.png";
    }

}

function firstStep(player){
    let pc = randomRPS();
    pictureChanger(player, pc);
    //alert("player: "+player+" pc: "+pc);
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
    return "playerWin";
}

function secondStep(result){
    if (result == "draw"){
        document.querySelector("#screen #player-div p").style="background: #ffffaa;";
        document.querySelector("#screen #pc-div p").style="background: #ffffaa;";
    }
    if (result == "playerWin"){
        document.querySelector("#screen #player-div p").style="background: #aaffaa;";
        document.querySelector("#screen #pc-div p").style="background: #ffaaaa;";
        playerScore++;
        //alert("win");
    }
    if (result == "playerLose"){
        document.querySelector("#screen #player-div p").style="background: #ffaaaa;";
        document.querySelector("#screen #pc-div p").style="background: #aaffaa;";
        pcScore++;
        //alert("lose");
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


