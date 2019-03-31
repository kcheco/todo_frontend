import React, { Component } from 'react';

const INITIAL_STATE = {
  todos: [
    {
      id: 194104194191,
      title: "Get first todo done",
      completed: false
    },
    {
      id: 430103419411,
      title: "Get second todo done",
      completed: false
    }
  ],
  todoTitle: ''
}

const TodoContext = React.createContext(INITIAL_STATE);

export const TodoContextConsumer = TodoContext.Consumer;

export default class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  addNewTodo = () => {
    const newTodo = { title: this.state.todoTitle, completed: false, id: Date.now() + Math.random() };
    this.setState({
      todos: this.state.todos.push(newTodo),
      todoTitle: ''
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter( t => t.id !== id)
    })
  }

  toggleTodoCompletion = (id) => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({ todos })
  }

  handleInput = (event) => {
    this.setState({
      todoTitle: event.target.value
    });
  }

  handleAddTodo = (event) => {
    event.preventDefault();
    if ( event.target.value !== "" ) {
      console.log(event.target.value);
      this.addNewTodo();
    } else {
      console.log('input not being read');
      
    }
  }

  render() {
    return (
      <TodoContext.Provider
        value={{ 
          todos: this.state.todos, 
          todoTitle: this.state.todoTitle,
          deleteTodo: this.deleteTodo,
          toggleTodoCompletion: this.toggleTodoCompletion,
          handleInput: this.handleInput,
          handleAddTodo: this.handleAddTodo
         }}
      >
        { this.props.children }
      </TodoContext.Provider>
    );
  }
}