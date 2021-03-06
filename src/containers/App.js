import React, { PureComponent } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "1", name: "David", age: 36 },
        { id: "12", name: "Aurelie", age: 28 },
        { id: "61", name: "Max", age: 30 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
    console.log("[App.js Inside Constructor]", props);
  }

  componentWillMount() {
    console.log("[App.js Inside componentWillMount]");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js Inside shouldComponentUpdate]', nextProps, nextState);
  //   // return true ;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate() {
    console.log("[UPDATE App.js] inside componentWillUpdate");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE Persons.js] inside getDerivedStateFromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log(
      "[UPDATE Persons.js] inside getSnapshotBeforeUpdate"
    );
  }

  componentDidUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside componentDidlUpdate",
      nextProps,
      nextState
    );
  }

  componentDidMount() {
    console.log("[App.js Inside componentDidMount]");
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
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => { this.setState({ authenticated: true }) };

  render() {
    console.log("[App.js Inside render()]");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showPersons: true })}>
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, "App");
