import { ResponseTodoInterface, TodoInterface } from './../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = 'http://localhost:3000/todos'

  constructor(private http: HttpClient) { }

  getAllTodos (): Observable<TodoInterface[]> {
   return this.http.get<TodoInterface[]>(this.baseUrl);
  }

  createTodo (todo: TodoInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(this.baseUrl, todo);
  }

  updateTodo (todo: TodoInterface): Observable<TodoInterface> {
    return this.http.put<TodoInterface>(`${this.baseUrl}/${todo.id}`, todo);
  }

  deleteTodo (id: number) {
    return this.http.delete<TodoInterface>(`${this.baseUrl}/${id}`);
  }

  filterTodo () {

  }
}
