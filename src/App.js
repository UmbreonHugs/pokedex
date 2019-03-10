import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

// TODO: Build an function that allows React App to get the data from the API. (To test, let the user imput search for Umbreon)
// TODO: Implement a searchbar + advanced search (for organizing pokemon by species, region, generation, types, height, weight, legendary)

class App extends Component {
  state = {
    currentPokemon: []
  }
  fetchPokemon = (name) => {
    P.getPokemonByName(name)
    .then((res) => {this.setState({currentPokemon: res})});
    console.log(this.state.currentPokemon);
  } 
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <ul>
            <li><a href="#">Pokedex</a></li>
            <li><a href="#">Moves</a></li>
            <li><a href="#">Types</a></li>
            <li><a href="#">Abilities</a></li>
            <li><a href="#">Items</a></li>
            <li><a href="#">Nature</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
