import React, { Component } from 'react';
import Textfield from './Textfield';
import Button from './Button';

class TodoForm extends Component {
  render() {
    return (
      <form>
        <h2>What needs to get done?</h2>
        <Textfield 
          fieldName="todo[title]"
          placeholderText="..."
        />
        <Button text="Add Todo" />
      </form>
    );
  }
}

export default TodoForm;