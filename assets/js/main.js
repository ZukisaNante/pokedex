var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var input = document.querySelector(".pokemon-input");
var pokemonName = document.querySelector(".pokemon-name");
var pokemonImage = document.querySelector(".pokemon-image");
var

function getPokemonData() {
    axios.get(apiUrl + input.value)
        .then(function(response) {
            pokemonName.innerHTML = response.data.forms[0].name;
            pokemonImage.src = response.data.sprites.front_default;
        })
        .catch(function(error) {
            pokemonName.innerHTML = "(An error has occurred.)";
            pokemonImage.src = "";
        });
}

var button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemonData);

//calling pokemon trough the next button
function nextPokemon() {
    /*  axios.get(apiUrl)
         .then(function(response) {
             pokemonName.innerHTML = response.data.forms[0].name;
             pokemonImage.src = response.data.sprites.front_default;
         })
         //check errors
         .catch(function(error) {
             pokemonName.innerHTML = "(An error has occurred.)";
             pokemonImage.src = "";
         }) */
    if (input == "") {

        pokemonName.innerHTML = response.data.forms[0].name;
        pokemonImage.src = response.data.sprites.front_default;
    }
    var nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", getPokemonData());
}