import React, { Component } from 'react';

const INITIAL_STATE = {
  todos: [],
  todoTitle: '',
  errorMessages: {}
}

const TodoContext = React.createContext();

export const TodoContextConsumer = TodoContext.Consumer;

const _clearErrorMessage = Symbol('clearErrorMessage');
const _setNewID = Symbol('setNewId');

export default class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  addNewTodo = () => {  
    if ( this.state.todoTitle === "" || this.state.todoTitle == null || typeof this.state.todoTitle == 'undefined') {
      this.setState({
        errorMessages: { todoTitle: 'Todo title cannot be empty/blank.' }
      });
      return;
    }

    const newTodo = { title: this.state.todoTitle, completed: false, id: this[_setNewID]() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todoTitle: ''
    })
    this[_clearErrorMessage]();
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter( t => t.id !== id)
    })
    console.log(`Todo with id ${id} was removed`);
    this[_clearErrorMessage]();
  }

  toggleTodoCompletion = (id) => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        
        console.log(`Todo updated: ${JSON.stringify(todo)}`);
        return todo;
      } else {
        return todo;
      }
    })

    this.setState({ todos })
    this[_clearErrorMessage]();
  }

  handleInput = (event) => {
    this.setState({
      todoTitle: event.target.value
    });
  }

  handleAddTodo = (event) => {
    event.preventDefault();
    this.addNewTodo();
  }

  // private
  [_setNewID]() {
    return Date.now() + (Math.floor(Math.random() * 1000000000000));
  }

  // private
  [_clearErrorMessage]() {
    this.setState({
      errorMessages: {}
    })
  }

  render() {
    return (
      <TodoContext.Provider
        value={{ 
          todos: this.state.todos, 
          todoTitle: this.state.todoTitle,
          errorMessages: this.state.errorMessages,
          deleteTodo: this.deleteTodo,
          toggleTodoCompletion: this.toggleTodoCompletion,
          setTodoTitle: this.handleInput,
          handleAddTodo: this.handleAddTodo
         }}
      >
        { this.props.children }
      </TodoContext.Provider>
    );
  }
}