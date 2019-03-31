import React, { Component } from 'react';
import Textfield from './Textfield';
import Button from './Button';
import { TodoContextConsumer } from '../contexts/TodoContextProvider';

class TodoForm extends Component {
  render() {
    return (
        <TodoContextConsumer>
          { value => {
            const { todoTitle, setTodoTitle, handleAddTodo, errorMessages } = value;
            return (
              <form 
                className="Todo__form" 
                id="addTodo"
                onSubmit={ handleAddTodo }
              >
                <h2>What needs to get done?</h2>
                { errorMessages !== "" &&
                  <p>{ errorMessages.todoTitle }</p>
                }
                <Textfield 
                  fieldName="todoTitle"
                  placeholderText="..."
                  todoTitle={ todoTitle }
                  action={ setTodoTitle }
                />
                <Button
                  type="submit"
                  text="Add Todo"
                />
              </form>
            )
          }}
        </TodoContextConsumer>
    );
  }
}

export default TodoForm;