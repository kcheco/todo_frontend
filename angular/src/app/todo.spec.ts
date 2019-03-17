import { Todo } from './todo';

describe('Todo', () => {
  let todo: Todo;

  beforeEach(() => {
    todo = new Todo({
      title: 'Create a todo using Angular'
    });
  });

  it('should create an instance', () => {
    expect(todo).toBeTruthy();
  });

  it('should validate title is not empty/blank', () => {
    expect(todo.title).not.toEqual("");
    expect(todo.title).not.toBeNull();
    expect(todo.title).not.toBeUndefined();
  });

  it('should validate completed is not empty/blank', () => {
    expect(todo.completed).not.toEqual("");
    expect(todo.completed).not.toBeNull();
    expect(todo.completed).not.toBeUndefined();
  });
});
