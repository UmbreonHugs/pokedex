const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

export const getPokemonByName = () => {
  P.getPokemonByName("umbreon") // with Promise
  .then(function(response) {
    console.log(response)
    return response;
  })
}