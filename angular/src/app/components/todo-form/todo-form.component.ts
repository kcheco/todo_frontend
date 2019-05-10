import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { FormControl } from '@angular/forms';

@Component ({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {
  private newTodo : Todo;
  public title : FormControl = new FormControl('');
  @Output() addTodoEvent = new EventEmitter<Todo>();

  public createTodo() : void {
    this.newTodo = new Todo({title: this.title.value });
    this.addTodoEvent.emit(this.newTodo);
    this._resetForm();
  }

  private _resetForm() {
    this.title = new FormControl('');
  }
}