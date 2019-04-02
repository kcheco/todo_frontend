import React, { Component } from 'react';
import '../assets/css/TodoItem.css';
import { 
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';

class TodoItem extends Component {
  render() {
    return (
      <ListItem 
        className="Todo__item"
      >
        { this.props.completeTodoCheckbox }
        <ListItemText
          className={ this.props.todo.completed ? "Todo__completed" : "" }
        >
          { this.props.todo.title }
        </ListItemText>
        <ListItemSecondaryAction>
          { this.props.deleteTodoButton }
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default TodoItem;