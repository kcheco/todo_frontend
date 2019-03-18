import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  private lastId: number = 0;
  private todos: Todo[] = [];

  constructor() { }

  getTodos() : Todo[] {
    return this.todos;
  };

  saveTodo(todo: Todo) : TodoDataService {
    if (!todo.id) {
      todo.id = this.increment_id();
    }
    this.todos.push(todo);

    return this;
  };

  deleteTodoById(id: number) : TodoDataService {
    let todo = this.getTodo(id);
    if (todo instanceof Todo) {
      this.todos = this.todos.filter(t => t != todo);
    }

    return this;
  };

  updateTodoById(id: number, attributes: {}) : Todo {
    let todo = this.getTodo(id);
    if (todo instanceof Todo) {
      Object.assign(todo, attributes);
    }

    return todo;
  };
  
  private getTodo(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    let todo = this.todos.find(todo => todo.id === id);
    
    if(!todo) {      
      throw new Error(`Todo with id of ${id} does not exist.`)
    }

    return todo;
  };

  private increment_id() : number {
    return ++this.lastId;
  };
}