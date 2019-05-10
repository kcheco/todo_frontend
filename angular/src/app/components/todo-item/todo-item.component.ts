import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor() {}
}