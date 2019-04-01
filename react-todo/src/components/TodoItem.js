import React, { Component } from 'react';
import { 
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';

class TodoItem extends Component {
  render() {
    return (
      <ListItem className="Todo__item" disableGutters={true}>
        { this.props.completeTodoCheckbox }
        <ListItemText>
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