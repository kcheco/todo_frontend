import React, { Component } from 'react';
import '../assets/css/TodoForm.css';
import { TodoContextConsumer } from '../contexts/TodoContextProvider';
import { 
  Button, 
  FormHelperText, 
  Grid, 
  TextField, 
  Typography, 
  Paper
} from '@material-ui/core';

class TodoForm extends Component {
  render() {
    return (
      <Grid container>
        <Grid 
          xs={12} 
          md={4}  
          xl={3} 
          style={{ marginTop: "1rem", marginRight: "auto", marginBottom: "1rem", marginLeft: "auto" }}
          item>
          <Paper
            className="Todo__form"
            elevation={2}>
            <Typography 
              variant="h4"
              gutterBottom={true}
              align="left">
              What needs to get done?
            </Typography>
            <TodoContextConsumer>
              { value => {
                const { todoTitle, setTodoTitle, handleAddTodo, errorMessages } = value;
                return (
                  <form  
                    id="addTodo"
                    onSubmit={ handleAddTodo } >
                    <Grid item xs={12}>
                      <TextField
                        name="todoTitle"
                        placeholder="...what I love do best is Nothing"
                        value={ todoTitle }
                        onChange={ setTodoTitle }
                        onBlur={ setTodoTitle }
                        autoFocus={ true }
                        margin="dense"
                        error={ errorMessages.todoTitle ? true : false }
                        style={{ width: "100%" }} />

                      { errorMessages !== "" &&
                        <FormHelperText 
                          error={ errorMessages.todoTitle ? true : false } >
                          { errorMessages.todoTitle }
                        </FormHelperText>
                      }

                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "right" }}>
                      <Button
                        type="submit"
                        color="primary">
                        Add Todo
                      </Button>
                    </Grid>
                  </form>
                )
              }}
            </TodoContextConsumer>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default TodoForm;