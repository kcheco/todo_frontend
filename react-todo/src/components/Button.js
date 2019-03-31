import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        onClick={ this.props.eventHandler.bind(this) }
      >
        { this.props.text }
      </button>
    );
  }
}

export default Button;