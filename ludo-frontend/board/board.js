const boardContainerDiv = document.querySelector("#board-container")



function renderTiles(){


    for (let i = 1; i <= 40; i++){
        const tileDiv = document.createElement("div")
        tileDiv.classList.add("tile")
        tileDiv.classList.add( (i%2 == 0)? "even": "odd")
        tileDiv.id = `tile${i}`
        tileDiv.dataset.tileId = i
        tileDiv.innerText = i
        boardContainerDiv.appendChild(tileDiv)   

    }

}

renderTiles()


function newToken(playerNumber){

    const imageSources ={
        one: "assets/blueToken.png",
        two: "assets/greenToken.png",
    }

    const tokenImg = document.createElement("img")

    tokenImg.setAttribute("src", imageSources[playerNumber])

    tokenImg.classList.add("token")

    tokenImg.addEventListener("click", e=>{
        moveToken(e.target, 5)
    })

    return tokenImg
}



document.querySelector("#tile1").appendChild(newToken("one"));



function moveToken(token, spaces){
    for (let i =1; i<=spaces; i++){
        setTimeout((e)=>{stepToken(token, 1)}, 200*i)
    }
}



function stepToken(token, spaces){
    const currentTile = token.parentElement;
    const tileNumber = currentTile.dataset.tileId;

    const targetTileNumber = (parseInt(tileNumber) + spaces)%40

    console.log(targetTileNumber);

    const targetTile = document.getElementById(`tile${targetTileNumber}`)


    targetTile.appendChild(token)
}









