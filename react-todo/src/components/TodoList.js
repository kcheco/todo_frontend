import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Button from './Button';
import { TodoContextConsumer } from '../contexts/TodoContextProvider';

class TodoList extends Component {
  render() {
    return (
      <div className="Todo__list view">
        <h2>To-do List</h2>
        <TodoContextConsumer>
          { value => {
            const { todos, toggleTodoCompletion, deleteTodo } = value;
            if (todos.length < 1) {
              return (
                <p>Let's add something you want to get done</p>
              );
            }

            return todos.map( todo => {
              return (
                <TodoItem
                  key={ todo.id }
                  todo={ todo }
                  toggleTodoCompletion={ toggleTodoCompletion }
                  deleteTodo={[
                    <Button 
                      key={ todo.id } 
                      text="Delete" 
                      onClick={() => deleteTodo(todo.id) }
                    />
                  ]}
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