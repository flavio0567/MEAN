import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
user;

  constructor(
    private _taskService: TaskService, 
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._taskService.login(this.user, (res) => {
      this._router.navigate(['/tasks']);
    });
  }

}
