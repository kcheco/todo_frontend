import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

class TodoItem extends Component {
  render() {
    return (
      <div class="Todo__item view">
        <div class="col">
          <Checkbox 
            fieldName="todo[completed]"
            checked={ this.props.todo.completed }
          />
        </div>
        <div class="col">
          { this.props.todo.title }
        </div>
        <div class="col">
          <Button text="Delete" />
        </div>
      </div>
    );
  }
}

export default TodoItem;