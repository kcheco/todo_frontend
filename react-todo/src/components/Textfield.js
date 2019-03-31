import React, { Component } from 'react';

class Textfield extends Component {
  render() {
    return (
      <input 
        type="text"
        name={ this.props.fieldName } 
        placeholder={ this.props.placeholderText }
        value={ this.props.todoTitle }
        onChange={ this.props.action }
        onBlur={ this.props.action }
        autoFocus={ true }
      />
    );
  }
}

export default Textfield;