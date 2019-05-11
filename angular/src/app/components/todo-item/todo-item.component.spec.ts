import {
  TestBed, ComponentFixture
} from '@angular/core/testing';

import { TodoItemComponent } from "./todo-item.component";
import { Todo } from 'src/app/model/todo';
import { getTestTodos } from 'src/app/services/testing/test-todo-data.service';

import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule
} from '@angular/material';
import { DebugElement } from '@angular/core';

const TODOS = getTestTodos();

describe('TodoItemComponent', () => {
  let component : TodoItemComponent;
  let fixture : ComponentFixture<TodoItemComponent>;
  let todo : Todo;
  let buttonDe : DebugElement

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a todo', () => {
    todo = TODOS[0];
    component.todo = todo;
    fixture.detectChanges();

    expect(component.todo).toBe(todo);
  });

  it('should send the todo I would like to remove from list', () => {
    let todoToDelete : Todo;
    todo = TODOS[0];
    component.todo = todo;

    // subscribe to event emitter
    component.removeTodoEvent.subscribe((todo) => todoToDelete = todo);

    // simulate delete button being clicked and trigger the event subscription
    component.removeTodo(todo);

    expect(todoToDelete).toBe(todo);
  });

  it('removeTodoEvent should emit when button is clicked', () => {
    todo = TODOS[0];

    spyOn(component.removeTodoEvent, 'emit');
    // simulate delete button being clicked
    component.removeTodo(todo);

    expect(component.removeTodoEvent.emit).toHaveBeenCalledWith(todo);
  })
});