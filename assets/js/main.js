const input = document.getElementById("input");
const sprites = document.getElementById("sprites");
const familySprites = document.getElementById("familySprites");
const stats = document.getElementById("stats");
const number = document.getElementById("number");
const name = document.getElementById("name");
const moves = document.getElementById("moves");
const type = document.getElementById("type");
let pokeID;
let pokeName;

input.addEventListener("keyup", key => {
     let pokemon = input.value.toLowerCase();
     if (key.keyCode == 13) {
          getPokedex(pokemon);
     }
});

async function getPokedex(input) {
     let request = `https://pokeapi.co/api/v2/pokemon/${input}`;
     let response = await fetch(request, { mode: "cors" }).then(response => {
          console.log(response);
          if (!response.ok) {
               console.log("pokemon doesn't exist");
               alert("pokemon doesn't exist");
          }
          return response;
     });
     let pokeEntry = await response.json();

     await updatePokedex(pokeEntry);
}

function updatePokedex(pokeEntry) {
     console.log(pokeEntry);
     pokeID = pokeEntry.id;
     pokeName = pokeEntry.species.name;

     sprites.src = pokeEntry.sprites.front_default;
     number.innerHTML = "n°" + pokeID;
     name.innerHTML = pokeName;

     input.value = pokeName;

     type.innerHTML = " ";
     pokeEntry.types.forEach(name => {
          type.innerHTML += name.type.name + " ";
     });

     moves.innerHTML =
          pokeEntry.moves[0].move.name + "<br>" + pokeEntry.moves[1].move.name + "<br>" + pokeEntry.moves[2].move.name + "<br>" + pokeEntry.moves[3].move.name;
}

document.getElementById("nextPokemon").addEventListener("click", nextPokemon);
document.getElementById("previousPokemon").addEventListener("click", previousPokemon);

function nextPokemon() {
     let nextID = pokeID + 1;
     getPokedex(nextID);
}

function previousPokemon() {
     let previousID = pokeID - 1;
     getPokedex(previousID);
}
