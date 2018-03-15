import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { PlayerListComponent } from './team/player-list/player-list.component';
import { PlayerNewComponent } from './team/player-new/player-new.component';
import { StatusGameComponent } from './team/status-game/status-game.component';
import { TeamService } from './team/team.service';
import { PageNotFoundComponent } from './team/page-not-found/page-not-found.component';
import { PlayerDeleteComponent } from './team/player-delete/player-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayerListComponent,
    PlayerNewComponent,
    StatusGameComponent,
    PageNotFoundComponent,
    PlayerDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
