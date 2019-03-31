import React, { Component } from 'react';
import Textfield from './Textfield';
import Button from './Button';
import { TodoContextConsumer } from '../contexts/TodoContextProvider';

class TodoForm extends Component {
  render() {
    return (
        <TodoContextConsumer>
          { value => {
            const { todoTitle, handleInput, handleAddTodo } = value;
            return (
              <form className="Todo__form" id="addTodo">
                <h2>What needs to get done?</h2>
                <Textfield 
                  fieldName="todo[title]"
                  placeholderText="..."
                  todoTitle={ todoTitle }
                  handleInput={ handleInput }
                />
                <Button 
                  text="Add Todo" 
                  eventHandler={ handleAddTodo } 
                />
              </form>
            )
          }}
        </TodoContextConsumer>
    );
  }
}

export default TodoForm;