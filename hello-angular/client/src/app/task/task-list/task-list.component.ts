import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task> = [];

  task: Task[];
  user;

  constructor(private _taskService: TaskService, private _router: Router) { }
  
  ngOnInit() {
    this.user = this._taskService.user;
    this.retrieveTasks();
  }

  newTask() {
      this._router.navigate(['/tasks/new']);
    }

  retrieveTasks(){
    this._taskService.retrieveTasks((res) => {
      this.tasks = res;
    });
  }
 
}

