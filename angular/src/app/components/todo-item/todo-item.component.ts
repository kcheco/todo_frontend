import {
  Component, EventEmitter, Input, Output
} from '@angular/core';

import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() removeTodoEvent = new EventEmitter<Todo>();
  @Output() toggleCompleteEvent = new EventEmitter<Todo>();

  constructor() {}

  removeTodo(todo: Todo) : void {
    this.removeTodoEvent.emit(todo);
  }

  toggleComplete(todo: Todo) : void {
    this.toggleCompleteEvent.emit(todo);
  }
}