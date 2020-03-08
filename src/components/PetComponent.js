import React, {Component} from 'react';


class PetComponent extends Component {


  pet_fun = event => {

    console.log(event);   // Synthetic event
    console.log(event.target);
    event.target.style["backgroundColor"] =  this.props.color ;
    //event.target.style.color = "white";
    
    alert(`*** The ${this.props.species} says ${this.props.noise} ***`);
    
  }


  render() {

    return (
      <fieldset>
        <legend> { this.props.species } </legend>
        <button onClick={ this.pet_fun }>Pet the { this.props.species }</button>
      </fieldset>

    );
  }

} // Pet_component ***


export default PetComponent;

