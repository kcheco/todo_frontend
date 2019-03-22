import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  private newTodo: Todo = new Todo({});
  constructor(private todoDataService: TodoDataService) {
  }

  title = 'TodoAngular';

  addTodo() {
    this.todoDataService.saveTodo(this.newTodo);
    this.newTodo = new Todo({});
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  toggleCompleted(todo) {
    this.todoDataService.toggleComplete(todo.id);
  }

  get todos() {
    return this.todoDataService.getTodos();
  }
}
