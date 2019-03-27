import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {}

  render() {
    return (
      <button onClick={ this.handleOnClick }>
        { this.props.text }
      </button>
    );
  }
}

export default Button;