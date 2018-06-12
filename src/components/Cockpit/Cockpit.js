import React from "react";
import './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = props => {

  const classes = [];
  const btnClasse = [];

  if(props.showPersons){
    btnClasse.push('btnClasse');
  }
  if (props.persons.length <= 2) {
    classes.push('red');
  }
  if (props.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This is really working !</p>
      <button
        className={btnClasse}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default cockpit;