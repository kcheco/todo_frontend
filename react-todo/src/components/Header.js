import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <a className="App-link" href="/">
          { this.props.appName }
        </a>
      </header>
    );
  }
}

export default Header;