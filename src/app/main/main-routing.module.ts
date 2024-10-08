import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';

const routes: Routes = [
  {path: '', component: TodoListPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
