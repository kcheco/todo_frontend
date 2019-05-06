import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule, 
  MatToolbarModule, 
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, 
  MatCheckboxModule
} from '@angular/material';
import { TodoDataService } from './services/todo-data.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

describe('AppComponent', () => {
  let todoDataServiceStub : Partial<TodoDataService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule
      ],
      providers: [
        { provide: TodoDataService, useValue: todoDataServiceStub }
      ],
      declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TodoAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TodoAngular');
  });
});
