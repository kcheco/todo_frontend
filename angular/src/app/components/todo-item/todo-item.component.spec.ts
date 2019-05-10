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
  let expectedTodo : Todo;

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
    expectedTodo = TODOS[0];
    component.todo = expectedTodo;
    fixture.detectChanges();

    expect(component.todo).toBe(expectedTodo);
  });
});