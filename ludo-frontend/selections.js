
document.addEventListener("DOMContentLoaded", function() {
    newPlayer();
});

function newPlayer(){
  const playerForm = document.querySelector("#player-form")
  playerForm.addEventListener("submit", (e) => {
   e.preventDefault()
  //  debugger
  playerPostRequest(e);
  // debugger
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
           "avatar": e.target[1].value,
           "money": 500
       })
    }
     
    return fetch("http://localhost:3000/players", configObj)
    .then(resp => resp.json() )
    .then(playerObject => {
        // debugger
    //    const body = document.querySelector("#game-board")
    //    body.appendChild(....)
    })
   }