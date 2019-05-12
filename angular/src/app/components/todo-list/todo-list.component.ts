import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../../model/todo'

@Component ({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() removeTodoEvent = new EventEmitter<Todo>();
  @Output() toggleCompleteEvent = new EventEmitter<Todo>();

  constructor() {}

  removeTodo(todo: Todo) {
    this.removeTodoEvent.emit(todo);
  }

  toggleComplete(todo: Todo) {
    this.toggleCompleteEvent.emit(todo);
  }
}