import { 
  TestBed, async, inject 
} from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from '../classes/todo';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(TodoDataService);
    expect(service instanceof TodoDataService).toBeTruthy();
  });

  describe('#getTodos', () => {
    beforeEach(() => {
      service = new TodoDataService();
    });

    it('should retrieve all todos', () => {
      let todo1 = new Todo({title: 'Create a Todo app'});
      let todo2 = new Todo({title: 'Set up Todo Data service'});
      service.saveTodo(todo1);
      service.saveTodo(todo2);
      expect(service.getTodos()).toEqual([todo1, todo2]);
    });
  });

  describe('#saveTodo(todo)', () => {
    beforeEach(() => {
      service = new TodoDataService();
    });

    it('should auto-increment an id', () => {
      let mockTodo = new Todo({title: 'Make a new todo added receive next id number'});
      service.saveTodo(mockTodo);
      expect(service.getTodos()[0].id).toEqual(1);
    });

    it('should increase count of Todo by 1', () => {
      let mockTodo = new Todo({title: 'Make the todo service count to increase from 0 to 1'});
      service.saveTodo(mockTodo);
      expect(service.getTodos().length).toEqual(1, 'One Todo');
    });

    it('should validate title is not empty', () => {
      let mockTodo = new Todo({title: ''});
      
      expect(() => { service.saveTodo(mockTodo) }).toThrowError('Todo title cannot be empty/blank.');
    });
  });

  describe('#deleteTodoById(id)', () => {
    beforeEach(() => {
      service = new TodoDataService();
    })

    it('should remove a todo based on id provided', () => {
      let todo1 = new Todo({title: 'Create a Todo app'});
      let todo2 = new Todo({title: 'Set up Todo Data service'});
      service.saveTodo(todo1);
      service.saveTodo(todo2);
      service.deleteTodoById(todo1.id);
      expect(service.getTodos()).toEqual([todo2]);
    });

    it('should return TodoNotFound exception when id does not exist', () => {
      let todo1 = new Todo({title: 'Create a Todo app'});
      let todo2 = new Todo({title: 'Set up Todo Data service'});
      service.saveTodo(todo1);
      service.saveTodo(todo2);
      expect(() => { service.deleteTodoById(3) }).toThrowError('Todo with id of 3 does not exist.');
    });
  });

  describe('#updateTodo(attributes)', () => {
    beforeEach(() => {
      service = new TodoDataService();
    });

    it('should return Todo with updated values', () => {
      let mockTodo = new Todo({title: 'Update the attribute values of an existing todo'});
      service.saveTodo(mockTodo);
      let updatedTodo = service.updateTodo({
        id: 1,
        title: "Updated the attribute values",
        completed: true
      });
      expect(updatedTodo.title).toEqual('Updated the attribute values');
      expect(updatedTodo.completed).toBeTruthy();
    });

    it('should not change the id when being updated', () => {
      let mockTodo = new Todo({title: 'Update the attribute values of an existing todo'});
      service.saveTodo(mockTodo);
      let updatedTodo = service.updateTodo({
        id: 1,
        title: "Updated the attribute values",
        completed: true
      });
      expect(updatedTodo.id).toEqual(1);
    })

    it('should return TodoNotFound exception when id does not exist', () => {
      let mockTodo = new Todo({title: 'Update the attribute values of an existing todo'});
      service.saveTodo(mockTodo);
      expect(() => {
        let todoAttributes = {
          id: 3,
          title: 'This is for a todo that doesn\'t exist'
        };
        service.updateTodo(todoAttributes);
      }).toThrowError('Todo with id of 3 does not exist.');
    });
  });
  
  describe('#toggleComplete', () => {
    beforeEach(() => {
      service = new TodoDataService();
    });

    it('should switch Todo to true if its currently false', () => {
      let mockTodo = new Todo({title: 'Change the completion status of existing todo'});
      service.saveTodo(mockTodo);
      let savedTodo = service.getTodos()[0];
      service.toggleComplete(savedTodo.id);
      expect(savedTodo.completed).toBeTruthy();
    });

    it('should switch Todo to false if its currently true', () => {
      let mockTodo = new Todo({title: 'Change the completion status of existing todo', completed: true});
      service.saveTodo(mockTodo);
      let savedTodo = service.getTodos()[0];
      service.toggleComplete(savedTodo.id);
      expect(savedTodo.completed).toBeFalsy();
    });

    it('should return TodoNotFound exception when id does not exist', () => {
      let mockTodo = new Todo({title: 'Change the completion status of a todo that does not exist'});
      service.saveTodo(mockTodo);
      expect(() => {
        service.toggleComplete(3);
      }).toThrowError('Todo with id of 3 does not exist.');
    });
  });
});
