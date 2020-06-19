const welcomeDiv = document.querySelector("#welcome-div")
const logInDiv = document.querySelector("#log-in-div")
const playerFormDiv = document.querySelector("#player-form-div")
const gameFormDiv = document.querySelector("#game-form-div")
const blankImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
const selectPlayers = document.querySelector("#choose-players")


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

//setTimeout(() => { hideSection(element) }, 5000);
// hideSection(logInDiv)
// hideSection(playerFormDiv)
// hideSection(gameFormDiv)

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
    .then(playerObject => { playerCard(playerObject) })
  }

   //----------- Append a players card to the DOM -----------//
  function playerCard(element){
   const bodyElement = document.querySelector("#images");
    
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card")

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

    const playerNumber = document.createElement("h4");
    playerNumber.innerHTML = "Player 1"
    
    divCard.append(playerHeader, avatar, luDollars, playerNumber)
    
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
     hideSection(gameFormDiv)
    })
  }
  
    //----------- (POST) Create a new Game -----------//
    function gamePostRequest(e) {
      // debugger
      // const randomWords =  
      let configObj = {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         },
         body: JSON.stringify({
            //  "game_key": 
            //  "player_count": e.target[0].value,
            //  "stake": e.target[3].value,
            //  "is_complete": "false"
         })
      }
       
      return fetch("http://localhost:3000/games", configObj)
      .then(resp => resp.json() )
      .then(gameObject => {
        console.log(gameObject)
          playerCard(gameObject)
        const numberOfPlayers = e.target[0].value
        const competitor = e.target[1].value
        const numberOfPieces = e.target[2].value
        const stakeChosen = e.target[3].value
        playerCard(competitor)
        // collectStakes(player1, competitor, stakeChosen) -- select player one? the person logged in
      })
    //   .then(() => renderBoard();)

     }

//----------- Game Pot for 2 players-----------//
function collectStakes(player1, player2, stake){
  // let gamePot = 0
  // player1.money -= stake
  // player2.money -= stake
  // gamePot = stake * 2
}

//----------- End Game -----------//
function endGame(){
  //Give the winner all the money in the pot 
  //Show the players pot with a crown OR number 1
  //Update game records
  //Reset the game
}





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