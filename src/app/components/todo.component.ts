import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToDo } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  @Output()
  newToDo = new Subject<ToDo>();

  createForm() {
    return this.fb.group({
      description: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      priority: this.fb.control<string>('', [Validators.required]),
      dueDate: this.fb.control<string>('', [Validators.required])
    })
  }

  processForm() {
    const todo: ToDo = this.form.value as ToDo;
    let todayDate = new Date().toISOString().split('T')[0];
    if (todo.dueDate < todayDate) {
      alert("Due date is in the past")
    } else {
      this.newToDo.next(todo);
      this.form.reset();
    }
  }
}
