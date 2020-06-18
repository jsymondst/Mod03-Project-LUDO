const welcomeDiv = document.querySelector("#welcome-div")
const logInDiv = document.querySelector("#log-in-div")
const playerFormDiv = document.querySelector("#player-form-div")
const gameFormDiv = document.querySelector("#game-form-div")



document.addEventListener("DOMContentLoaded", function() {
    newPlayer();
});

function hideSection(element){
    element.classList.add("hidden");
}

function showSection(element){
    element.classList.remove("hidden");
}
//setTimeout(() => { hideSection(element) }, 5000);
// hideSection(logInDiv)
// hideSection(playerFormDiv)
// hideSection(gameFormDiv)

const logInButton = document.querySelector("#log-in-button")
const newPlayerButton = document.querySelector("#new-player-button")

logInButton.addEventListener("click", function(e){
    showSection(logInDiv)
    hideSection(playerFormDiv)
    hideSection(gameFormDiv)
})
newPlayerButton.addEventListener("click", function(e){
    showSection(playerFormDiv)
    hideSection(logInDiv)
    hideSection(gameFormDiv)
})

 //----------- Sliders display the number they are on -----------//
 const firstSlider = document.querySelector("#first-slider");
 const firstSliderValue = document.querySelector("#first-slider-value");
 firstSliderValue.innerHTML = firstSlider.value; // Display the default slider value
 firstSlider.addEventListener("input", () => {
    firstSliderValue.innerHTML = firstSlider.value;
 })

 const slider = document.querySelector("#second-slider");
 const sliderValue = document.querySelector("#second-slider-value");
 sliderValue.innerHTML = slider.value; // Display the default slider value
 slider.addEventListener("input", () => {
    sliderValue.innerHTML = slider.value;
 })

//----------- Invoke player POST request -----------//
function newPlayer(){
  const playerForm = document.querySelector("#player-form")

  playerForm.addEventListener("submit", (e) => {
   e.preventDefault()
   playerPostRequest(e);
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
    .then(playerObject => {
        console.log(playerObject)
        playerCard(playerObject)
    })
    .then(() => showSection(gameFormDiv), hideSection(playerFormDiv), hideSection(welcomeDiv))
   }

   //----------- Append a players card to the DOM -----------//
  function playerCard(element){
   const bodyElement = document.querySelector("#images");
    
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card")

    const playerHeader = document.createElement("h2");
    playerHeader.innerHTML = element.username.toUpperCase()

    const avatar = document.createElement("img");
    avatar.setAttribute("src", element.avatar)
    avatar.setAttribute("class", "player-avatar")

    const luDollars = document.createElement("h4");
    luDollars.innerHTML = "LuDollars: "
    const value = document.createElement("span");
    value.innerHTML = element.money
    luDollars.appendChild(value)

    divCard.append(playerHeader, avatar, luDollars)

    bodyElement.appendChild(divCard)
}