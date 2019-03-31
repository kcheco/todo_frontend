import React, { Component } from 'react';
import './../assets/css/App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoContextProvider from '../contexts/TodoContextProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          appName="TodoReact" 
        />
        <TodoContextProvider>
          <TodoForm />
          <TodoList />
        </TodoContextProvider>
      </div>
    );
  }
}

export default App;
