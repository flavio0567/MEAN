import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task = new Task();
  user;
  
  constructor(
    private _taskService: TaskService, 
    private _router: Router,
    private _route: ActivatedRoute 
  ) { }
  
    ngOnInit() {
      this.user = this._taskService.user;
      this.user = this.user;
      this._route.paramMap.subscribe(params => {
        this._taskService.getTaskById(params.get('id'), (res) => {
          this.task = res;
        });
      })
    }
  
    updateTask() {
      this._taskService.updateTask(this.task, (res) => {
        this._router.navigate(['/tasks', res]);
      });
    };
}

