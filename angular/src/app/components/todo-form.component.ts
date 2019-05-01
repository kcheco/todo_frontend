import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../classes/todo';

@Component ({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {
  private newTodo : Todo = new Todo({})
  @Output() addTodoEvent = new EventEmitter<Todo>()

  createTodo (todoTitle: string) : void {
    this.newTodo.title = todoTitle
    this.addTodoEvent.emit(this.newTodo)
  }
}