import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'David', age: '36' },
        { id: '12', name: 'Aurelie', age: '28' },
        { id: '61', name: 'Max', age: '30' },
      ],
      showPersons: false,
    }
    console.log('[App.js Inside Constructor]', props)
  }

  componentWillMount() {
    console.log('[App.js Inside componentWillMount]');
  }

  componentDidMount() {
    console.log('[App.js Inside componentDidMount]');
  }

  // state = {
  //   persons: [
  //     { id: '1', name: 'David', age: '36' },
  //     { id: '12', name: 'Aurelie', age: '28' },
  //     { id: '61', name: 'Max', age: '30' },
  //   ],
  //   showPersons: false,
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons }); 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log('[App.js Inside render()]');
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      )
    }

    return (
        <div className="App">
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
          {persons}
        </div>
    );
  }
}

export default App;
