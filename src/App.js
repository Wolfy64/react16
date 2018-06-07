import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !</p>
        <Person name="David" age="36"/>
        <Person name="Aurelie" age="28">My Hobbies is: Series</Person>
        <Person name="Max" age="30"/>
      </div>
    );
  }
}

export default App;