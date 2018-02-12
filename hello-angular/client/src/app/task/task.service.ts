import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from './task';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  task = new Task;
  tasks;
  user;

  login(user, callback) {
    this.user = user;
    console.log('LOGIN success: ', this.user);
    callback(this.task);
  }

  retrieveTasks(tasks) {
    this._http.get('/tasks').subscribe(
      (res) => {
        console.log('SUCCESS in getting tasks: ', res.json());
        this.tasks = res.json();
        tasks(res.json());
      },
      (err) => {
        console.log('ERROR in getting tasks: ', err);
      }
    );
  }

  newTask(task, callback) {
    this._http.post('/tasks/new', {task: task } ).subscribe(
      (res) => {
        console.log('SUCCESS creatting task: ',   res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR creatting task: ', err);
      }
    );
  }

  updateTask(task, callback) {
    this._http.put('/tasks/' + task._id, {task: task } ).subscribe(
      (res) => {
        console.log('SUCCESS updatting task: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR updatting task: ', err);
      }
    );
  }

  deleteTask(task, callback) {
    this._http.delete('/tasks/' + task._id ).subscribe(
      (res) => {
        console.log('SUCCESS deletting task: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR deletting task: ', err);
      }
    );
  }

  getTaskById(id, callback) {
    this._http.get('/tasks/' + id ).subscribe(
      (res) => {
        console.log('SUCCESS getting TaskById: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR getting TaskById: ', err);
      }
    );
  }

}

