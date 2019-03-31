import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { TodoContextConsumer } from '../contexts/TodoContextProvider';

class TodoList extends Component {
  render() {
    return (
      <div className="Todo__list view">
        <h2>To-do List</h2>
        <TodoContextConsumer>
          { value => {
            const { todos, toggleTodoCompletion, deleteTodo } = value;
            return todos.map( todo => {
              return (
                <TodoItem
                  key={ todo.id }
                  todo={ todo }
                  toggleTodoCompletion={ toggleTodoCompletion }
                  deleteTodo={ deleteTodo }
                />
              );
            })
          }}
        </TodoContextConsumer>
      </div>
    );
  }
}

export default TodoList;