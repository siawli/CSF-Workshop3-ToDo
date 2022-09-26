import { Component } from '@angular/core';
import { ToDo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ws3ToDo';

  todoLists: ToDo[] = []

  addToDo(todo: ToDo) {
    this.todoLists = [...this.todoLists, todo]
  }
}
