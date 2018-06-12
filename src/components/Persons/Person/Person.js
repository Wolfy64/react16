import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{
  constructor(props) {
    super(props);
    console.log('[Person.js Inside Constructor]', props)
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js Inside componentWillMount]');
  }

  componentDidMount() {
    console.log('[Person.js Inside componentDidMount]');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js Inside render()]');

    return (
      <Aux>
        <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          ref= {this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }
}

Person.propTypes = {
  cliked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, 'Person');
// export default Person;