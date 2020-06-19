
const turnTracker = document.getElementById("turn-tracker")




startGame()

function gameLoop(){
    // Active player rolls
    // Active player resolves roll
    // Turn is passed to new player
}






function startGame(){
    
    console.log("Starting a game")

    // enableRollButton();
    addToken("p1");
    addToken("p2")
    turnTracker.dataset.activePlayer = "p1"
    hideAllButtons();
    enableAllButtons();
    startTurn();

    //setupTokens()
    //rollForFirstTurn()
    //enterGameLoop()
    

}

function enableRollButton(){
    const diceButton = document.getElementById("p1-roll-button")
    diceButton.addEventListener("click", rollHandler)
}

function disableRollButton(){
    const diceButton = document.getElementById("p1-roll-button")
    diceButton.removeEventListener("click", rollHandler)
}

function newToken(playerString){

    const imageSources ={
        p1: "assets/blueToken.png",
        p2: "assets/greenToken.png",
    }

    const tokenImg = document.createElement("img")

    tokenImg.setAttribute("src", imageSources[playerString])

    tokenImg.classList.add("token")

    tokenImg.classList.add(playerString)

    tokenImg.dataset.track = ""
    tokenImg.dataset.position = 0
    tokenImg.dataset.player = playerString

    return tokenImg
}

function moveToken(token, spaces){
    for (let i =1; i<=spaces; i++){
        setTimeout((e)=>{stepToken(token, 1)}, 200*i)
    }
}

function stepToken(token, spaces){
    const tileNumber = token.dataset.position
    const targetTileNumber = (parseInt(tileNumber) + spaces)%36;

    const targetTile = document.getElementById(`main${targetTileNumber}`)
    targetTile.appendChild(token);
    
    token.dataset.position = targetTileNumber

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
    
    const spaces = turnTracker.dataset.result;    
    moveToken(this, spaces)
    removeMoveHandlerFromTokens()
    passHandler()

}





function showTileIDs(){
    const allTiles = document.querySelectorAll(".tile")

    allTiles.forEach(tileDiv =>{
        const idParagraph = document.createElement("p")
        idParagraph.innerText = (tileDiv.id || "");
        tileDiv.appendChild(idParagraph)
    })

}



function fancyRoll(){
    
    const diceDiv = document.querySelector("#p1dice")
    return new Promise((resolve ,reject) => {
        let result = 6
        for (let i =10; i<=55; i+= 3){
            setTimeout(()=>{
                result = Math.ceil(Math.random()*6)
                diceDiv.className = `tile dice${result}`
            },
            i*i
            )        
        }
        setTimeout(()=>{
            resolve(result)
        },3100
        )
        
    })

}

function addToken(playerString){
    
    token = newToken(playerString)
    token.dataset.track="main"
    if (playerString == "p1"){
        token.dataset.position = 0
        document.querySelector("#main0").appendChild(token);
    } else {
        token.dataset.position = 18
        document.querySelector("#main18").appendChild(token);
    } 


}






/// Old stuff

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