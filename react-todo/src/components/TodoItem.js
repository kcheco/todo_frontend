import React, { Component } from 'react';
import Checkbox from './Checkbox';

class TodoItem extends Component {
  render() {
    return (
      <div className="Todo__item view">
        <div className="col">
          <Checkbox 
            todoId={ this.props.todo.id }
            fieldName="todoTitle"
            isChecked={ this.props.todo.completed }
            toggleTodoCompletion={ this.props.toggleTodoCompletion }
          />
        </div>
        <div className="col">
          { this.props.todo.title }
        </div>
        <div className="col">
          { this.props.deleteTodo }
        </div>
      </div>
    );
  }
}

export default TodoItem;