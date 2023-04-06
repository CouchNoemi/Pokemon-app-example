let searchEl = document.getElementById("auto-complete");
let searchBtn = document.getElementById("searchBtn");
let dropItem = document.getElementById("dropItem");
let pokemonSelect = document.getElementById("pokemonSelect");

function setPokemonTypes() {
  fetch("https://pokeapi.co/api/v2/type")
    .then((res) => res.json())
    .then((data) => {
      const { results } = data;

      results.forEach((el) => {
        var option = document.createElement("option"); // creating option element
        option.textContent = el.name; // set text content of option element
        option.value = el.name; // setting the value attribute of option element
        pokemonSelect.appendChild(option); // add option element to pokemon select element
      });
    })
    .catch((err) => console.log(err));
}

setPokemonTypes();

// pokemons: https://pokeapi.co/api/v2/pokemon?limit=151
// pokemon-types: https://pokeapi.co/api/v2/type
