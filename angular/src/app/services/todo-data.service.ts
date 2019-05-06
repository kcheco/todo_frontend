import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  private lastId: number = 0;
  protected todos: Todo[] = [];

  constructor() { }

  getTodos() : Todo[] {
    return this.todos;
  };

  saveTodo(todoAttr: Todo | Todo[]) : TodoDataService {
    if (isArray(todoAttr)) {
      this._saveTodos(todoAttr);
    } else {
      this._saveTodo(todoAttr);
    }

    return this;
  };

  deleteTodoById(id: number) : TodoDataService {
    let todo = this.getTodo(id);
    if (todo instanceof Todo) {
      this.todos = this.todos.filter(t => t != todo);
    }

    return this;
  };

  updateTodo(attributes: {}) : Todo {
    let todo = this.getTodo(attributes['id']);
    if (todo instanceof Todo) {
      Object.assign(todo, attributes);
      this.saveTodo(todo);
    }

    return todo;
  };

  toggleComplete(id: number) : Todo {
    let updatedTodo: Todo;
    let todo = this.getTodo(id);
    
    if (todo instanceof Todo) {
      todo.completed = !todo.completed;
      updatedTodo = this.updateTodo(todo);
    }

    return updatedTodo;
  }
  
  private getTodo(id: number | string) : Todo {
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

  private _saveTodo(todo: Todo) : void {
    if (!todo.title) {
      throw new Error('Todo title cannot be empty/blank.');
    }

    if (!todo.id) {
      todo.id = this.increment_id();
      this.todos.push(todo);
    }
  }

  private _saveTodos(todosArray: Todo[]) : void {
    todosArray.map((todo) => {
      this._saveTodo(todo);
    })
  }
}
