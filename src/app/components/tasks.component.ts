import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  listToDo!: ToDo[]

}
