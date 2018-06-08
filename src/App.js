import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: '36' },
      { name: 'Aurelie', age: '28' },
      { name: 'Max', age: '30' },
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON"T DO THIS: this.state.persons[0].name = 'David Superstar'
    this.setState({persons: [
      { name: newName, age: '36' },
      { name: 'Aurelie', age: '28' },
      { name: 'Max', age: '99' },
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: 'David', age: '36' },
      { name: event.target.value, age: '28' },
      { name: 'Max', age: '99' },
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Tata')}
            changed={this.nameChangeHandler}>My Hobbies is: Series</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
