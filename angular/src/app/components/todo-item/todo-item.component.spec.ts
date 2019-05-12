import {
  TestBed, ComponentFixture
} from '@angular/core/testing';

import { TodoItemComponent } from "./todo-item.component";
import { Todo } from 'src/app/model/todo';
import { getTestTodos } from 'src/app/services/testing/test-todo-data.service';

import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule
} from '@angular/material';

const TODOS = getTestTodos();

describe('TodoItemComponent', () => {
  let component : TodoItemComponent;
  let fixture : ComponentFixture<TodoItemComponent>;
  let todo : Todo;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule
      ],
      declarations: [
        TodoItemComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    todo = TODOS[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a todo', () => {
    component.todo = todo;
    fixture.detectChanges();

    expect(component.todo).toBe(todo);
  });

  it('should send the todo I would like to remove from list', () => {
    let todoToDelete : Todo;
    component.todo = todo;

    // subscribe to event emitter
    component.removeTodoEvent.subscribe((todo) => todoToDelete = todo);

    // simulate delete button being clicked and trigger the event subscription
    component.removeTodo(todo);

    expect(todoToDelete).toBe(todo);
  });

  it('removeTodoEvent should emit when button is clicked', () => {
    spyOn(component.removeTodoEvent, 'emit');
    // simulate delete button being clicked
    component.removeTodo(todo);

    expect(component.removeTodoEvent.emit).toHaveBeenCalledWith(todo);
  });

  it('should send the todo I have toggled the complete status', () => {
    let toggledTodo : Todo;
    component.todo = todo;

    // subscribe to event emitter
    component.toggleCompleteEvent.subscribe((todo) => toggledTodo = todo);

    // simulate click the checkbox
    component.toggleComplete(todo);

    expect(toggledTodo).toBe(todo);
  });

  it('toggleCompleteEvent should emit after checkbox is clicked', () => {
    spyOn(component.toggleCompleteEvent, 'emit');

    component.toggleComplete(todo);

    expect(component.toggleCompleteEvent.emit).toHaveBeenCalledWith(todo);
  });
});