

///////////////////////////////////////////////////////////////////////////////////
//Show and hide buttons
///////////////////////////////////////////////////////////////////////////////////


function showOptionButtons(activePlayer){
    showMoveButton(activePlayer)
    showAddTokenButton(activePlayer)
}

function hideAllButtons(){
    const allButtons = document.querySelectorAll(".button"){
        allButtons.forEach(button => {
            button.classList.add("hidden")
        });
    }
}

function showMoveButton(activePlayer){
    const moveButton = document.getElementById(`${activePlayer}-move-button`)
    moveButton.classList.remove("hidden");
}

function hideMoveButton(activePlayer){
    const moveButton = document.getElementById(`${activePlayer}-move-button`)
    moveButton.classList.add("hidden");
}


function showAddTokenButton(activePlayer){
    const moveButton = document.getElementById(`${activePlayer}-add-token-button`)
    moveButton.classList.remove("hidden");
}

function hideAddTokenButton(activePlayer){
    const moveButton = document.getElementById(`${activePlayer}-add-token-button`)
    moveButton.classList.add("hidden");
}


function showRollButton(activePlayer){
    const moveButton = document.getElementById(`${activePlayer}-roll-button`)
    moveButton.classList.remove("hidden");
}

function hideRollButton(activePlayer){
    const moveButton = document.getElementById(`${activePlayer}-roll-button`)
    moveButton.classList.add("hidden");
}

///////////////////////////////////////////////////////////////////////////////////
//Handlers
///////////////////////////////////////////////////////////////////////////////////


function addTokenHandler(){
    addToken(activePlayer)
    hideAllButtons()
}

function moveButtonHandler(){
    addMoveHandlerToTokens()
    hideAllButtons()
}