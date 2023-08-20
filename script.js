function getComputerChoice(){
    var min = 1;
    var max = 3;
    
    var moveNumber = Math.round(Math.random() * (max - min) + min);

    switch (moveNumber){
        case 1:
            console.log("Computer played Rock");
            break;
            
        case 2:
         console.log("Computer played Paper");
         break;
            
        case 3:
         console.log("Computer played Scissors");
         break;
    }

}

getComputerChoice();
