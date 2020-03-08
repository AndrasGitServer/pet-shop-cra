import React, { Component } from 'react';
import './App.css';
import PetComponent from './components/PetComponent';

const name = "Andrew";
// App can receive a prop from the file: index.js !
// then change the line App to App(props)


const pets_ara = [
  { species: 'Dingo',   noise: 'noise awooooo',       color: 'darkorange' },
  { species: 'Turtle',  noise: 'noise eating grapes', color: 'olive' },
  { species: 'Penguin', noise: 'noise kikiki',        color: 'yellow' }
];


class App extends Component {

  render() {
    return (
      <div>

        <h2>Welcome to {name}'s petshop !</h2>
        <PetComponent species='Dingo' noise='noise awooooo' color='darkorange'/>
        <PetComponent species='Turtle' noise='noise eating grapes'color='olive'/>
        <PetComponent 
          species='Penguin' 
          noise='noise kikiki' 
          color='yellow'
        />

      </div>
    );
  }
} // App ***


export default App;

