import React, { Component } from 'react';

class Textfield extends Component {
  render() {
    return (
      <input 
        type="text"
        name={ this.props.fieldName } 
        placeholder={ this.props.placeholderText }
      />
    );
  }
}

export default Textfield;