import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../task';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

task = new Task();
user;

  constructor(
    private _taskService: TaskService, 
    private _router: Router, 
) { }

  ngOnInit() {
    this.user = this._taskService.user;
    this.user = this.user;
  }

  newTask() {
    this._taskService.newTask(this.task, (res) => {
      this._router.navigate(['/tasks', res]);
    });
  };

}

