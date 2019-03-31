import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

class TodoItem extends Component {
  render() {
    return (
      <div className="Todo__item view">
        <div className="col">
          <Checkbox 
            todoId={ this.props.todo.id }
            fieldName="todo[completed]"
            isChecked={ this.props.todo.completed }
            toggleTodoCompletion={ this.props.toggleTodoCompletion }
          />
        </div>
        <div className="col">
          { this.props.todo.title }
        </div>
        <div className="col">
          <Button
            text="Delete" 
            eventHandler={ this.props.deleteTodo }
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;