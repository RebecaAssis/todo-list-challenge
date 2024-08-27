import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Input() form: FormGroup = {} as FormGroup;
  @Output() createTodoEvent: EventEmitter<any> = new EventEmitter();
  @Output() updateTodoEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createTodo () {
    this.createTodoEvent.emit();
  }

  updateTodo () {
    this.updateTodoEvent.emit()
    'chamou'
  }

}
