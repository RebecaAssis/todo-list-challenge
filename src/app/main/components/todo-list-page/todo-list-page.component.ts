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
    this.getFormValue();
    this.getAllTodos();
  }

  getAllTodos () {
    this.todoService.getAllTodos()
      .pipe(takeUntil(this.unsub$))
      .subscribe({
        next: (value) => {
          this.todoList = value;
          console.log(value)
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  createTodo () {  
    const id = this.todoList[this.todoList.length - 1]?.id + 1;
    const todo = {
      id: id,
      title: this.form?.get('title')?.value,
      content: this.form?.get('text')?.value,
      done: false
    }

    this.todoService.createTodo(todo)
    .pipe(take(1))
    .subscribe((response) => {
      this.todoList.push(response)
      this.form.reset();
    })
  }

  editTodo (todo: TodoInterface) {
    this.form.patchValue({
      id: todo.id,
      title: todo.title,
      text: todo.content,
      checked: todo.done
    })
  }

  updateTodo () {
    const todo = {
      id: this.form.get('id')?.value,
      title: this.form.get('title')?.value,
      content: this.form.get('text')?.value,
      done: this.form.get('checked')?.value,
    }

    this.todoService.updateTodo(todo)
      .pipe(take(1))
      .subscribe(() => {
        const item = this.todoList.find((item) => {
          return item.id === todo.id
        }) as TodoInterface;

        const itemPosition = this.todoList.indexOf(item); 

        this.todoList.splice(itemPosition, 1, todo);
        this.form.reset();
      })
  }

  toggleTodoStatus (todo: TodoInterface) {
    this.todoService.updateTodo(todo)
      .pipe(take(1))
      .subscribe(() => {
        const item = this.todoList.find((item) => {
          return item.id === todo.id
        }) as TodoInterface;

        const itemPosition = this.todoList.indexOf(item); 

        this.todoList.splice(itemPosition, 1, todo);
        this.form.reset();
      })
  }

  deleteTodo (id: number) {
    this.todoService.deleteTodo(id)
      .pipe(take(1))
      .subscribe(() => {
        const element = this.todoList.find((todo) => todo.id === id);
        if(element) {
          const index = this.todoList?.indexOf(element);
          this.todoList.splice(index, 1);
        }
      })
  }

  getFormValue () {
    this.form.valueChanges
      .pipe(takeUntil(this.unsub$))
      .subscribe((value) => {
        console.log(value);
      })
  }

  ngOnDestroy(): void {
      this.unsub$.next();
      this.unsub$.unsubscribe();
  }

}
