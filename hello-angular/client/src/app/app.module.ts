import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TaskService } from './task/task.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskShowComponent } from './task/task-show/task-show.component';
import { TaskUpdateComponent } from './task/task-update/task-update.component';
import { TaskDeleteComponent } from './task/task-delete/task-delete.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { PageNotFoundComponent } from './task/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskNewComponent,
    TaskShowComponent,
    TaskUpdateComponent,
    TaskDeleteComponent,
    TaskListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
