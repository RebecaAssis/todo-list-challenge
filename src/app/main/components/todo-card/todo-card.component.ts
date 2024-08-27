import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodoInterface } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() form: FormGroup = {} as FormGroup;
  @Input() todo: TodoInterface = {} as TodoInterface;
  @Output() deleteTodoEvent: EventEmitter<any> = new EventEmitter();
  @Output() updateTodoEvent: EventEmitter<any> = new EventEmitter();
  @Output() toggleTodoStatusEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo () {
    this.deleteTodoEvent.emit(this.todo.id);
  }

  updateTodo () {
    this.updateTodoEvent.emit(this.todo);
  }

  toggleChecked () {
    this.todo.done = !this.todo.done;
    this.toggleTodoStatusEvent.emit(this.todo);
  }
}
