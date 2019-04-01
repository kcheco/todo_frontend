import React, { Component } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography 
} from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography className="App-link" color="inherit" variant="h6">
            { this.props.appName }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;