import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { TodoCardComponent } from './components/todo-card/todo-card.component';


@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoInputComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoService]
})
export class MainModule { }
