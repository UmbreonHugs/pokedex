import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as PokeAPI from './API/GetAPI';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('loads the PokeAPI without errors', () => {
  expect(PokeAPI.getPokemonByName()).toBe(true);
});

