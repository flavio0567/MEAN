import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskShowComponent } from './task/task-show/task-show.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskUpdateComponent } from './task/task-update/task-update.component';
import { PageNotFoundComponent } from './task/page-not-found/page-not-found.component';
import { TaskDeleteComponent } from './task/task-delete/task-delete.component';

const routes: Routes = [
  { 
    path: '',
    component: TaskComponent,
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TaskListComponent,
    pathMatch: 'full',
    data: { title: 'Recipies' }
  },
  { 
    path: 'tasks/new',
    component: TaskNewComponent,
    pathMatch: 'full'
  },
  { 
    path: 'tasks/update/:id',
    component: TaskUpdateComponent,
    pathMatch: 'full'
  },
  { 
    path: 'tasks/:id',
    component: TaskShowComponent,
    pathMatch: 'full'
  },
  { 
    path: 'tasks/delete/:id',
    component: TaskDeleteComponent,
    pathMatch: 'full'
  },
  { 
    path: 'reset',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
