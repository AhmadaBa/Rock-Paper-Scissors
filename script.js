function getComputerChoice(){
    var min = 1;
    var max = 3;
    
    var moveNumber = Math.round(Math.random() * (max - min) + min);

    switch (moveNumber){
        case 1:
            return "rock";
            
        case 2:
         return "paper";
            
        case 3:
        return "scissors";
    }

}

function singleRound(playerSelection,computerSelection){
    console.log("comp is " + computerSelection);

    if(playerSelection == computerSelection ){
        return "Tie";
    }

    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return "You Win";
        }else{
            return "You Lose";
        }
    }

    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You Win";
        }else{
            return "You Lose";
        }
    }

    else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "You Win";
        }else{
            return "You Lose";
        }
    }
    
}

function game(){

    for(var i = 0; i < 5; i++){
        var computer = getComputerChoice();
        var player = prompt("Enter Rock,Paper,Scissors: ").toLowerCase();

        console.log(singleRound(player,computer));
    }

}


game();
