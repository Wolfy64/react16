import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js Inside Constructor]", props);
  }

  componentWillMount() {
    console.log("[Persons.js Inside componentWillMount]");
  }

  componentDidMount() {
    console.log("[Persons.js Inside componentDidMount]");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillReceiveProps",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js Inside shouldComponentUpdate]', nextProps, nextState);
    return nextProps.Persons !== this.props.persons;
  }

  componentWillUpdate() {
    console.log('[UPDATE Persons.js] inside componentWillUpdate');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentDidlUpdate', nextProps, nextState);
  }

  compo

  render() {
    console.log("[Persons.js Inside render()]");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
