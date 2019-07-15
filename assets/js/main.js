const input = document.getElementById("input");
const sprites = document.getElementById("sprites");
const familySprites = document.getElementById("familySprites");
const stats = document.getElementById("stats");
const number = document.getElementById("number");
const name = document.getElementById("name");
const moves = document.getElementById("moves");
const type = document.getElementById("type");

input.addEventListener("keyup", key => {
     let pokemon = input.value.toLowerCase();
     if (key.keyCode == 13) {
          getPokedex(pokemon);
     }
});

async function getPokedex(input) {
     let request = `https://pokeapi.co/api/v2/pokemon/${input}`;
     let requestSpecies = `https://pokeapi.co/api/v2/pokemon-species/${input}`;
     let response = await fetch(request, { mode: "cors" });
     let responseSpecies = await fetch(requestSpecies, { mode: "cors" });
     let pokeEntry = await response.json();
     let speciesEntry = await responseSpecies.json();
     console.log(speciesEntry);
     await updatePokedex(pokeEntry);
}

function updatePokedex(pokeEntry) {
     console.log(pokeEntry);

     sprites.src = pokeEntry.sprites.front_default;
     number.innerHTML = "n°" + pokeEntry.id;
     name.innerHTML = pokeEntry.species.name;

     type.innerHTML = " ";
     pokeEntry.types.forEach(name => {
          console.log(name.type.name);
          type.innerHTML += name.type.name + " ";
     });

     moves.innerHTML =
          pokeEntry.moves[0].move.name + "<br>" + pokeEntry.moves[1].move.name + "<br>" + pokeEntry.moves[2].move.name + "<br>" + pokeEntry.moves[3].move.name;
}
