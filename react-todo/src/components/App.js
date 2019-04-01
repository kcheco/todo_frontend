import React, { Component } from 'react';
import './../assets/css/App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoContextProvider from '../contexts/TodoContextProvider';
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          appName="TodoReact" 
        />
        <Grid container style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <TodoContextProvider>
            <TodoForm />
            <TodoList />
          </TodoContextProvider>
        </Grid>
      </div>
    );
  }
}

export default App;
