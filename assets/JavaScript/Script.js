let searchEl = document.getElementById("auto-complete");
let searchBtn = document.getElementById("searchBtn");
let dropItem = document.getElementById("dropItem");
let pokemonSelect = document.getElementById("pokemonSelect");
let allPokemonData = [];

function getAllPokemonData() {
  let results = fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })
    .catch((err) => console.log(err));

  return results;
}

const setPokemonTypes = async () => {
  const pokemonData = await getAllPokemonData();
  pokemonData.forEach((el) => {
    allPokemonData.push(el);
    var option = document.createElement("option"); // creating option element
    option.textContent = el.name; // set text content of option element
    option.value = el.name; // setting the value attribute of option element
    pokemonSelect.appendChild(option); // add option element to pokemon select element
  });
};

setPokemonTypes();

$(function () {
  $("#auto-complete").autocomplete({
    source: allPokemonData.map(({ name }) => name),
  });
});
/*
   <input
              class="btn btn-dark mb-2 mt-2"
  
              id="auto-complete"
              placeholder="Search the PokeDex"
          />
  
          <button id='searchBtn' class="btn btn-dark text-white mb-2">Search</button>
  
  */

// pokemons: https://pokeapi.co/api/v2/pokemon?limit=151
// pokemon-types: https://pokeapi.co/api/v2/type
/*
SEARCH BAR:
dropDownBtn.addEventListener("click", getPokemons)
//getAllPokemon();
$(function() {
  $('#auto-complete').autocomplete({
    source: allPokemonData.map(({ name }) => name)
  });
});

DROPDOWN:
function getPokemons() {
  allPokemonData.forEach(i => {
    // console.log(i)
    var li = document.createElement("li")
    var a = document.createElement("a")
    a.textContent = i.name
    a.classList.add('dropdown-item')
    a.href = '#'
    li.appendChild(a)
    dropItem.appendChild(li)
  });
}
*/
