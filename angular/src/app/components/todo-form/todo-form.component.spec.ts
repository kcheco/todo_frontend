import {
  TestBed, ComponentFixture
} from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  FormsModule
} from '@angular/forms';

import {
  MatCardModule, MatInputModule
} from '@angular/material';

import { Todo } from '../../model/todo';

describe('TodoFormComponent', () => {
  let component : TodoFormComponent;
  let fixture : ComponentFixture<TodoFormComponent>;
  let inputDe : DebugElement;
  let inputEl : HTMLInputElement;
  let buttonDe : DebugElement;
  let expectedTodo : Todo;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatInputModule
      ],
      declarations: [
        TodoFormComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    inputDe = fixture.debugElement.query(By.css('input'));
    inputEl = inputDe.nativeElement;
    buttonDe = fixture.debugElement.query(By.css('button'));
    expectedTodo = new Todo({title: "Get first todo done", completed: false});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a text field with a name attribute of title', () => {
    expect(inputEl.name).toBe('title');
  });

  it('should set input form control as an empty value when component renders', () => {
    fixture.detectChanges();
    expect(inputEl.value).toBe('');
  });

  it('should set form control value on input', () => {
    fixture.detectChanges();
    
    // simulate entering title for new todo
    inputEl.value = "Get first todo done";
    inputEl.dispatchEvent(new Event('input'));
    
    expect(inputEl.value).toBe(expectedTodo.title);
  });

  it('#createTodo should emit a new todo', () => {
    // test vars
    let todoAfterSubmit : Todo;

    // simulate entering title for new todo
    inputEl.value = expectedTodo.title;
    // subscribe to Observable
    component.addTodoEvent.subscribe((todo) => todoAfterSubmit = todo );
    // execute subscription above by calling #createTodo
    component.createTodo(inputEl.value);
    
    expect(todoAfterSubmit).toEqual(expectedTodo);
  });

  it('should test the addTodoEvent emitter with a Jasmine spy', () => {
    spyOn(component.addTodoEvent, 'emit');

    // simulate entering title for new todo
    inputEl.value = expectedTodo.title;
    // simulate click the submit button on the form
    buttonDe.nativeElement.click();

    expect(component.addTodoEvent.emit).toHaveBeenCalledWith(expectedTodo);
  });
})