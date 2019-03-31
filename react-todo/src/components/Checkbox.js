import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <input 
        type="checkbox" 
        name={ this.props.fieldName } 
        checked={ this.props.isChecked }
        onChange={ this.props.toggleTodoCompletion.bind(this, this.props.todoId) }
      />
    );
  }
}

export default Checkbox;