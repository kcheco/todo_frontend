import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { TodoContextConsumer } from '../contexts/TodoContextProvider';
import { 
  Button, 
  Checkbox,
  Grid, 
  Typography, 
  Paper, 
  List
} from '@material-ui/core';

class TodoList extends Component {
  render() {
    return (
      <Grid container>
        <Grid 
          xs={12} 
          md={4} 
          style={{ marginTop: "1rem", marginRight: "auto", marginBottom: "1rem", marginLeft: "auto" }} 
          item
        >
          <Paper
            className="Todo__list"
            elevation={2}
            style={{ textAlign: "left", paddingTop: "3rem", paddingRight: "2rem", paddingBottom: "3rem", paddingLeft: "2rem" }}
          >
            <Typography 
              variant="h4" 
              gutterBottom={true}
              style={{ fontWeight: "700" }}
            >
              Todo List
            </Typography>
            <List>
            <TodoContextConsumer>
              { value => {
                const { todos, toggleTodoCompletion, deleteTodo } = value;
                const noTodoMsg = "Let's add something you want to get done";
                
                if (todos.length < 1) {
                  return (
                    <p>{ noTodoMsg }</p>
                  );
                }

                return todos.map( todo => {
                  return (
                    <TodoItem
                      key={ todo.id }
                      todo={ todo }
                      completeTodoCheckbox={[
                        <Checkbox
                          key={ todo.id }
                          name="todoTitle"
                          checked={ todo.completed }
                          onChange={() => toggleTodoCompletion(todo.id) }
                        />
                      ]}
                      deleteTodoButton={[
                        <Button
                          key={ todo.id }
                          color="secondary"
                          onClick={() => deleteTodo(todo.id) }
                        >
                          Delete
                        </Button>
                      ]}
                    />
                  );
                })
              }}
            </TodoContextConsumer>
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default TodoList;