export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(values: {}) {
    this.title = values['title'],
    this.completed = values['completed'] || false
  }
}
