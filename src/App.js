import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: '36' },
      { name: 'Aurelie', age: '28' },
      { name: 'Max', age: '30' },
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON"T DO THIS: this.state.persons[0].name = 'David Superstar'
    this.setState({persons: [
      { name: 'David Blala', age: '36' },
      { name: 'Aurelie', age: '28' },
      { name: 'Max', age: '99' },
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies is: Series</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
