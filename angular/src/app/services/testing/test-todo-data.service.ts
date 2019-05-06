import { Todo } from "src/app/model/todo";
import { TodoDataService } from '../todo-data.service';
import { Injectable } from '@angular/core';

const TODOS : Todo[] = [
  new Todo({title: 'Get first todo done'}),
  new Todo({title: 'Get second todo done'}),
  new Todo({title: 'Get third todo done'})
]

@Injectable()
export class TestTodoDataService extends TodoDataService {
  constructor() {
    super();
  }

  todos = getTestTodos();
}

export function getTestTodos(): Todo[] {
  return TODOS;
}