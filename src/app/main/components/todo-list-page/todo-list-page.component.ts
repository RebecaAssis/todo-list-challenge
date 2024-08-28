import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Subject, take, takeUntil } from 'rxjs';
import { TodoInterface, todoValidators } from '../../interfaces/todo.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit, OnDestroy {
  unsub$: Subject<void> = new Subject();
  todoList: TodoInterface[] = [];
  form: FormGroup = this.fb.group(new todoValidators());

  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos () {
    this.todoService.getAllTodos()
      .pipe(takeUntil(this.unsub$))
      .subscribe({
        next: (value) => {
          this.todoList = value;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  ngOnDestroy(): void {
      this.unsub$.next();
      this.unsub$.unsubscribe();
  }

}
