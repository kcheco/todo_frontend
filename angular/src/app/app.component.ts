import { Component } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {
  }

  title = 'TodoAngular';

  onAddTodo(todo: Todo) : void {
    this.todoDataService.saveTodo(todo);
  }

  removeTodo(todo: Todo) : void {
    this.todoDataService.deleteTodoById(todo.id);
  }

  toggleCompleted(todo: Todo) : void {
    this.todoDataService.toggleComplete(todo.id);
  }

  get todos() : Todo[] {
    return this.todoDataService.getTodos();
  }
}
