function announce(string){
    const actionAnnouncer = document.getElementById("action-announcer")
    actionAnnouncer.innerText = string
}



function startTurn(){
    let activePlayer = turnTracker.dataset.activePlayer

    turnTracker.dataset.result = 0

    enableRollButton(activePlayer)

}

function rollHandler(){
    
    fancyRoll()
    .then((result)=>{
        turnTracker.dataset.result = result
    }
    )
    .then(
        resultHandler()
    )
       
}

function resultHandler(){
    let result = turnTracker.dataset.result
    let activePlayer = turnTracker.dataset.activePlayer
    if (result == 6){
        sixHandler(activePlayer)
    } else {
        if (tokensInPlay(activePlayer)){
            announce("Select a token to move")
            addMoveHandlerToTokens()
        } else {
            announce("No tokens to move. Passing turn.")
            setTimeout(passHandler, 2500)
        } 
    }
}

function passHandler(){
    
    let activePlayer = turnTracker.dataset.activePlayer
    
    if (result == 6){
        announce("You rolled a 6! Roll again"){
            enableRollButton(activePlayer)
        }
    } else {
        switch(activePlayer){
            case "p1":
                turnTracker.dataset.activePlayer = "p2";
                break;
            case "p2":
                turnTracker.dataset.activePlayer = "p1";
                break;
        }
    }
}


function sixHandler(activePlayer){
    if (tokensInYard(activePlayer) && tokensInPlay(activePlayer)){
        announce("You rolled a six! Move a token or put a new token into play?")
        showOptionButtons(activePlayer)
    } else if (tokensInYard(activePlayer)){
        announce("You rolled a six! Put a token into play.")
        showAddTokenButton(activePlayer)
    } else if (tokensInPlay(activePlayer)) {
        announce("Select a token to move")
        addMoveHandlerToTokens()
    }
}



