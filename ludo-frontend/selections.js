const welcomeDiv = document.querySelector("#welcome-div")
const logInDiv = document.querySelector("#log-in-div")
const playerFormDiv = document.querySelector("#player-form-div")
const gameFormDiv = document.querySelector("#game-form-div")
const selectPlayers = document.querySelector("#choose-players")
const gameBoard = document.querySelector("#board-container")
const bodyElement = document.querySelector("#images");
const blankImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
const playerSelectionsDiv = document.querySelector("#player-selections")

const moneyBagImage ="data:image/jpeg;base64,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"
const moneyBagImgTag = document.createElement("img");
moneyBagImgTag.src = moneyBagImage
moneyBagImgTag.classList.add("money");

document.addEventListener("DOMContentLoaded", function() {
    newPlayer();
    playersGetRequest();
    newGame();
});

//----------- Show/ Hide a section -----------//
function hideSection(element){
    element.classList.add("hidden");
}

function showSection(element){
    element.classList.remove("hidden");
}

 //----------- Delete child elements -----------//
 function removeChildElements(parent) {
  while (parent.firstChild) {
   parent.removeChild(parent.lastChild);
  }
 }

hideSection(logInDiv)
hideSection(playerFormDiv)
hideSection(gameFormDiv)

const logInButton = document.querySelector("#log-in-button")
const newPlayerButton = document.querySelector("#new-player-button")

logInButton.addEventListener("click", function(e){
  showSection(logInDiv)
})
newPlayerButton.addEventListener("click", function(e){
  removeChildElements(logInDiv)
  showSection(playerFormDiv)
})

 //----------- Sliders display the number they are on -----------//
 const firstSlider = document.querySelector("#first-slider");
 const playersLabel = document.querySelector("#no-of-players")
 const firstSliderValue = document.querySelector("#first-slider-value");
 firstSliderValue.innerHTML = firstSlider.value; // Display the default slider value
 playersLabel.appendChild(firstSliderValue)
 firstSlider.addEventListener("input", () => {
    firstSliderValue.innerHTML = firstSlider.value;
 })

 const slider = document.querySelector("#second-slider");
 const piecesLabel = document.querySelector("#no-of-pieces")
 const sliderValue = document.querySelector("#second-slider-value");
 sliderValue.innerHTML = slider.value; // Display the default slider value
 piecesLabel.appendChild(sliderValue)
 slider.addEventListener("input", () => {
    sliderValue.innerHTML = slider.value;
 })


//----------- Invoke player POST request -----------//
function newPlayer(){
  const playerForm = document.querySelector("#player-form")

  playerForm.addEventListener("submit", (e) => {
   e.preventDefault()
   playerPostRequest(e);
   removeChildElements(playerFormDiv)
   showSection(gameFormDiv)
  })
}

//----------- (POST) Create a new player -----------//
  function playerPostRequest(e) {
    let configObj = {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
       },
       body: JSON.stringify({
           "username": e.target[0].value,
           "avatar": e.target[2].value,
           "money": 500
       })
    }
    
    return fetch("http://localhost:3000/players", configObj)
    .then(resp => resp.json() )
    .then(playerObject => { playerCard(playerObject,1) })
  }

  //----------- Append a players card to the DOM -----------//
  function playerCard(element, playerNumber){ 
   const divCard = document.createElement("div");
   divCard.setAttribute("class", "card")
   divCard.id = `player${playerNumber}-card`
   divCard.dataset.playerId = element.id
   

    const playerHeader = document.createElement("h3");
    playerHeader.innerHTML = element.username.toUpperCase()

    const avatar = document.createElement("img");
    if (element.avatar)
    {avatar.setAttribute("src", element.avatar)}
    else {avatar.setAttribute("src", blankImage)}
    avatar.setAttribute("class", "player-avatar")

    const luDollars = document.createElement("h4");
    luDollars.innerHTML = "LuDollars: "
    const value = document.createElement("span");
    value.innerHTML = element.money
    luDollars.appendChild(value)

    const playerNumberH2 = document.createElement("h4");
    playerNumberH2.innerHTML = `Player ${playerNumber}`
    

    divCard.append(playerHeader, avatar, luDollars, playerNumberH2)
    bodyElement.appendChild(divCard)
    // return element;
}

   //----------- Select players drop-down menu -----------//
   function playersGetRequest(){
    return fetch("http://localhost:3000/players")
    .then(function(resp){return resp.json() })
    .then(function(allPlayersObj) { 
      for (const playerObj of allPlayersObj){
        //   debugger
        addOptionToSelect(playerObj)
      }
     })
  }

  function addOptionToSelect(playerObj){
    const optionTag = document.createElement("option")
    optionTag.setAttribute("value", playerObj.id)
    optionTag.innerHTML = playerObj.username
    selectPlayers.appendChild(optionTag)
  }
  // debugger

  //----------- Invoke game POST request -----------//
function newGame(){
    const gameForm = document.querySelector("#game-form")
  
    gameForm.addEventListener("submit", (e) => {
     e.preventDefault()
     gamePostRequest(e);
     showSection(gameBoard)
     removeChildElements(playerSelectionsDiv)
    })
  }
  
    //----------- (POST) Create a new Game -----------//
    function gamePostRequest(e) {
      
      const player1Card = document.querySelector("#player1-card")
      const player1Id = player1Card.dataset.playerId
      
      let configObj = {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         },
         body: JSON.stringify({
             player_1_id: player1Id,
             player_2_id: e.target[1].value,
             player_count: e.target[0].value,
             stake: e.target[3].value,
         })
      }

       
      return fetch("http://localhost:3000/games", configObj)
      .then(resp => resp.json() )
      .then(gameObject => {
        console.log(gameObject)
        const numberOfPlayers = e.target[0].value
        const numberOfPieces = e.target[2].value
        const stakeChosen = e.target[3].value
        bodyElement.append(moneyBagImgTag)
        playerCard(gameObject.player_2_info, 2)
        collectStakes(gameObject.player_1_info, gameObject.player_2_info, stakeChosen) 
      })

     }

//----------- Game Pot for 2 players-----------//
function collectStakes(player1, player2, stake){
  let gamePot = 0
  player1.money -= stake //Is this change happening in the sever???
  player2.money -= stake
  // debugger
  gamePot = stake * 2
}

//----------- End Game -----------//
// function endGame(){
  //Give the winner all the money in the pot 
  //Show the players pot with a crown OR number 1
  //Update game records
  //Reset the game
// }

//----------- Log-in form -----------//
// function authentication(){
    // const logInForm = document.querySelector("#log-in-form")
  
    // logInForm.addEventListener("submit", (e) => {
    //  e.preventDefault()
    //  showSection(gameFormDiv)
    //  hideSection(logInDiv)
   //log in request / authentication
    // })
//   }