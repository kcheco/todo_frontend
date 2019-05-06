import { Component, Input } from '@angular/core'
import { Todo } from '../../model/todo'

@Component ({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input() todos: Todo[]

  constructor() {}
}