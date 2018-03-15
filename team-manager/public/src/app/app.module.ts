import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TeamService } from './team/team.service';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { PageNotFoundComponent } from './team/page-not-found/page-not-found.component';
import { Dialog } from './team/player-list/player-list.component';
import { PlayerListComponent } from './team/player-list/player-list.component';
import { PlayerNewComponent } from './team/player-new/player-new.component';
import { StatusGameComponent } from './team/status-game/status-game.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PageNotFoundComponent,
    PlayerListComponent,
    PlayerNewComponent,
    StatusGameComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents:[Dialog],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
