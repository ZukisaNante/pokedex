//declare variables
const input = document.getElementById("input");
const sprites = document.getElementById("sprites");
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
    let response = await fetch(request);
    let pokeEntry = await response.json();
    await updatePokedex(pokeEntry);
}

function updatePokedex(pokeEntry) {
    sprites.src = pokeEntry.sprites.front_default;
    name.innerHTML = "n°" + pokeEntry.id + " " + pokeEntry.species.name;
    //  type.innerHTML = pokeEntry.types
    moves.innerHTML =
        pokeEntry.moves[0].move.name + "<br>" + pokeEntry.moves[1].move.name + "<br>" + pokeEntry.moves[2].move.name + "<br>" + pokeEntry.moves[3].move.name;
}
// next button function
document.getElementsByClassName("nextPokemon").addEventListener("click", showSprite);

function showSprite() {
    document.getElementById('sprites').innerHTML = pokeEntry.id + 1;
}

//}

//nextPokemonButton();