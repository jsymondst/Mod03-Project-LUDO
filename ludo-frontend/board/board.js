



newGame()





function newGame(){
    renderTiles()
    createYards()
    enableRollButton()
    document.querySelector("#tile0").appendChild(newToken("one"));
}

function enableRollButton(){
    const diceButton = document.getElementById("roll")
    diceButton.addEventListener("click", rollHandler)
}

function disableRollButton(){
    const diceButton = document.getElementById("roll")
    diceButton.removeEventListener("click", rollHandler)
}




function renderTiles(){
    
    const boardContainerDiv = document.querySelector("#board-container")

    for (let i = 0; i < 20; i++){
        const tileDiv = document.createElement("div")
        tileDiv.classList.add("tile")
        tileDiv.classList.add( (i%2 == 0)? "even": "odd")
        tileDiv.id = `tile${i}`
        tileDiv.dataset.tileId = i
        tileDiv.innerText = i
        boardContainerDiv.appendChild(tileDiv)   
        
    }
    
}

function createYards(){
    const playerOneYard = document.getElementById("p1-yard")
    playerOneYard.dataset.player = "p1"
    fillYard(playerOneYard)
    
    const playerTwoYard = document.getElementById("p2-yard")
    playerTwoYard.dataset.player = "p2"
    fillYard(playerTwoYard)    
}


function fillYard(yard){
    player = yard.dataset.player
    for (let i=0; i<4; i++){
        const tileDiv = document.createElement("div")
        tileDiv.classList.add("tile")
        tileDiv.classList.add( (i%2 == 0)? "even": "odd")
        tileDiv.id = `${player}-yard-${i}`
        yard.appendChild(tileDiv)
    }
}



function newToken(playerNumber){

    const imageSources ={
        one: "assets/blueToken.png",
        two: "assets/greenToken.png",
    }

    const tokenImg = document.createElement("img")

    tokenImg.setAttribute("src", imageSources[playerNumber])

    tokenImg.classList.add("token")

    return tokenImg
}





function moveToken(token, spaces){
    for (let i =1; i<=spaces; i++){
        setTimeout((e)=>{stepToken(token, 1)}, 200*i)
    }
}



function stepToken(token, spaces){
    const currentTile = token.parentElement;
    const tileNumber = currentTile.dataset.tileId;
    const targetTileNumber = (parseInt(tileNumber) + spaces)%40;

    const targetTile = document.getElementById(`tile${targetTileNumber}`);
    targetTile.appendChild(token);
}


function addMoveHandlerToTokens(){
    const tokens = document.querySelectorAll(".token");
    
    tokens.forEach(token=>{
        token.addEventListener("click", moveHandler);
    })
}

function removeMoveHandlerFromTokens(){
    const tokens = document.querySelectorAll(".token");
    
    tokens.forEach(token=>{
        token.removeEventListener("click", moveHandler);
    })
    
}


function moveHandler(){
    
    const diceDiv = document.getElementById("dice");
    const spaces = diceDiv.dataset.result;    
    moveToken(this, spaces)
    removeMoveHandlerFromTokens()

}


function rollHandler(){
    const result = parseInt(Math.random()*6)+1
    const resultH2 = document.getElementById("dice-result")
    resultH2.innerText = result
    
    const diceDiv = document.getElementById("dice");
    diceDiv.dataset.result = result;
    
    addMoveHandlerToTokens();
}


function tileIDs(){
    const allTiles = document.querySelectorAll(".tile")

    allTiles.forEach(tileDiv =>{
        tileDiv.innerText = (tileDiv.id || "");
    })

}







function logThis(){
    console.log(this)
}
function addLogThis(){
    const token = document.querySelector(".token");
    token.addEventListener("click", logThis)
}
function removeLogThis(){
    const token = document.querySelector(".token");
    token.removeEventListener("click", logThis)
}