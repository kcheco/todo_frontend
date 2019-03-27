import React, { Component } from 'react';
import './../assets/css/App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName="TodoReact" />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
