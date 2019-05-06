import {
  TestBed, ComponentFixture
} from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { Todo } from '../../model/todo';
import { getTestTodos } from '../../services/testing/test-todo-data.service';

import {
  MatCardModule, MatCheckboxModule, MatIconModule, MatFormFieldModule
} from '@angular/material';
import { By } from '@angular/platform-browser';

const TODOS = getTestTodos();

describe('TodoListComponent', () => {
  let component : TodoListComponent;
  let fixture : ComponentFixture<TodoListComponent>;
  let expectedTodos : Todo[]

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule
      ],
      declarations: [
        TodoListComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    expectedTodos = TODOS;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a list of todos', () => {
    // mock receives todos from parent
    component.todos = TODOS;
    fixture.detectChanges();
    
    expect(component.todos).toBe(expectedTodos);
  })

  it('should display a no todos message when list is empty', () => {
    // mock receives no todos from parent
    component.todos = [];
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.todo__list'));
    const neHtml = de.nativeElement.innerHTML;

    expect(neHtml).toContain('Nothing to do.');
  })
});