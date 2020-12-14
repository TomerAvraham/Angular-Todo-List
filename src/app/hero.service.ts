import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(public http: HttpClient) {}

  public todos: any[] = [];
  public formInput: string;

  fetchTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (res: any) => (this.todos = res),
      (err) => console.log(err)
    );
  }

  fetchTodosByCompleted(trueOrFalse) {
    this.http
      .get(
        `https://jsonplaceholder.typicode.com/todos?completed=${trueOrFalse}`
      )
      .subscribe(
        (res: any) => (this.todos = res),
        (err) => console.log(err)
      );
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  handelChange(e) {
    this.formInput = e.target.value;
  }

  addTodo() {
    const newTodo = {
      id: uuid(),
      title: this.formInput,
      completed: false,
    };
    this.todos.push(newTodo);
  }
}
